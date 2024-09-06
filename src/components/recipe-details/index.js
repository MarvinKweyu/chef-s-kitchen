import React from 'react'
import Link from 'next/link'

function RecipeContent({ recipe }) {
  
  return (
    <div className='mx-auto p-6 lg:mx-w-6xl max-w-4xl '>
      <Link href={ '/recipe'} className='text-lg underline'>Back</Link>
      <div className='grid items-start grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='w-full lg:sticky top-0 sm:flex gap-2'>
          <img src={recipe?.image} alt={recipe?.name} className='w-4/5 rounded object-cover' />
        </div>
        <div>
          <h2 className='text-3xl font-extrabold text-gray-900'>{recipe?.name}</h2>
          <p className=' gap-4 mt-5 text-2xl text-gray-700'>{recipe?.mealType[0]}</p>
          <p className='text-xl text-gray-800 mt-5'>{recipe?.cuisine}</p>
          <div className="mt-5">
            <h3 className='text-lg font-bold text-gray-700'>Ingredients</h3>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
              {recipe?.ingredients.map(item => (
                <li key={item}>{ item }</li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <h3 className='text-lg font-bold text-gray-700'>Instructions</h3>
            <ul className="space-y-3 mt-4 pl-4 text-sm text-gray-700">
              {recipe?.instructions.map(item => (
                <li key={item}>{ item }</li>
              ))}
            </ul>
          </div>

        </div>


      </div>

    </div>
  )
}

export default RecipeContent