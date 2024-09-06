import React from 'react'
import RecipeList from '@/components/ui/recipe-list'
// fetch from the server but render data in components

const listOfRecipe = async () => {
    try {

        const res = await fetch('https://dummyjson.com/recipes')
        const data = await res.json();
        return data?.recipes;
    } catch (error) {
        throw new Error(error);
    }

}

async function Recipe() {
    const recipes = await listOfRecipe();
    return (
        <RecipeList recipe={recipes} />

    )
}

export default Recipe