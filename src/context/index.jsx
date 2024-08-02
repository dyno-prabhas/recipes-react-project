import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(searchParam);

    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${searchParam}`
      );
      const data = await response.json();

      console.log(data?.recipes);

      if (data?.recipes) {
        setRecipeList(data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate('/')
      }
    } catch (e) {
      setLoading(false);
      setSearchParam("");
    } 
  }

  function handleAddToFavorite(getCurrentItem) {
    console.log('handleAddToFavor',getCurrentItem);
    let cpyFavoritesList = [...favoritesList];

    console.log('In handle to favor getCurent recipe_id', getCurrentItem.recipe_id);

    const index = cpyFavoritesList.findIndex( item => 
      item.recipe_id === getCurrentItem.recipe_id )
    console.log('index', index);

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem)
    } else {
      cpyFavoritesList.splice(index);
    }
    console.log('cpyFavorList' ,cpyFavoritesList);
    setFavoritesList(cpyFavoritesList)
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
