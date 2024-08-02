import React from 'react'
import { GlobalContext } from '../../context';
import RecipeItem from '../../components/recipe-item';
import { useContext } from 'react';

function Favorites() {

  const { favoritesList, loading } = useContext(GlobalContext)

  if (loading) return <div>Loading... Please wait!</div>

  console.log( 'favor',favoritesList);

  return (

    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        favoritesList && favoritesList.length > 0 ? 
        favoritesList.map( item => <RecipeItem item={item} />) 
        : <div>
            <p>Nothing is added in favourites.</p>
          </div>
      }
    </div>
  )
}

export default Favorites;