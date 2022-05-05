import React from 'react'
import PreviousSearches from '../Components/PreviousSearches'
import RecipeCard from '../Components/RecipeCard'

const Recipes = () => {
    const recipes = [
        {
            title: 'Landing Page',
            image:'/img/1.png',
            authorImg: '/img/chef.png'
        },
        {
            title: 'Personal Website',
            image:'/img/2.png',
            authorImg: '/img/chef.png'
        },
        {
            title: 'Portfolio',
            image:'/img/3.png',
            authorImg: '/img/chef.png'
        },
        {
            title: 'Restaurant Website',
            image:'/img/4.png',
            authorImg: '/img/chef.png'
        },
        {
            title: 'E-commerce',
            image:'/img/5.png',
            authorImg: '/img/chef.png'
        },
        {
            title: 'Fitness Website',
            image:'/img/6.png',
            authorImg: '/img/chef.png'
        }
    ].sort(() => Math.random() - 0.5)
    return (
        <div>
            <PreviousSearches/>
            <div className='recipes-container'>
                {recipes.map((recipe, index) =>(
                    <RecipeCard key={index} recipe={recipe}/>
                ))}
            </div>
        </div>
    )
}

export default Recipes
