import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


function RecipeList({ recipe = [] }) {
    // console.log(recipe);
    return (
        <>
            <h2 className='text-4xl font-bold text-gray-800 mb-12'>Recipes</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8'>
            {
                    recipe.map((item) => (
                        <Link key={item.id} href={`/recipe/${item.id}`}>
                            <Card >
                    
                                <CardContent className="rounded-md overflow-hidden shadow-md hover:scale-[1.1] transition-all">
                                    <div className='w-full aspect-w-16 aspect-h-8 lg:h-80'>
                                        <img
                                            className='object-cover h-full w-full'
                                            src={item.image}
                                            alt={item.name}
                                           
                                        />
                                    </div>
                                    <div className='p-6'>
                                        <h3 className='text-lg font-bold text-gray-800'>{item.name}</h3>
                                    <div className='mt-4 flex items-center flex-wrap gap-2'>
                                            <p className='text-lg text-gray-600'>Rating {item.rating}</p>
                                            <div className="ml-auto">
                                                <p className='text-lg text-gray-600 font-bold'>{ item.cuisine}</p>
                                            </div>
                                    </div>
                                    </div>
                            
                        </CardContent>
                    
                    </Card>
                        </Link>
                    

                ))
                }
                </div>
        </>
    )
}

export default RecipeList