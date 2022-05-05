import React from 'react'
import CustomImage from './CustomImage'

const RecipeCard = ({recipe}) => {
    return (
        <div className='recipe-card'>
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className='recipe-card-info'>
                <img className='author-img' alt='' src={recipe.authorImg} />
                <p className='recipe-title'> {recipe.title}</p>
                <p className='recipe-desc'>A personal website designed specifically for you will give you the freedom to choose and control what is in it.</p>
                <a className='view-btn' href='#!'>Learn More</a>
            </div>
        </div>
    )
}

export default RecipeCard
