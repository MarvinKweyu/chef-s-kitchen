import React from 'react'
import RecipeContent from '@/components/recipe-details';

const recipeInfo = async (recipeId) => {
    try {

        const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function RecipeItem({ params }) {
    const recipe = await recipeInfo(params.recipeId);
    return (
        <RecipeContent recipe={recipe} />
  )
}

export default RecipeItem