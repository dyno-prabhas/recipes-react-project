import React from 'react'
import { GlobalContext } from '../../context';
import RecipeItem from '../../components/recipe-item';
import { useContext } from 'react';

function Home() {

  const { recipeList, loading } = useContext(GlobalContext)

  if (loading) return <div>Loading... Please wait!</div>

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        recipeList && recipeList.length > 0 ? 
        recipeList.map( item => <RecipeItem item={item} />) 
        : <div className='home-text-parent'>
            <p className='home-text'>Nothing to show. PLease search something</p>
          </div>
      }
    </div>
  )
}

export default Home;