import React from 'react'
import ChiefCard from './ChiefCard'

const ChiefSection = () => {
    const chiefs = [
        {
            name: 'محمد محمد',
            img: '/img/chef.png',
            recipesCount: '10',
            cuisine: 'جزائري'
        },
        {
            name: 'خالد خالد',
            img: '/img/chef.png',
            recipesCount: '6',
            cuisine: 'مغربي'
        },
        {
            name: 'هشام هشام',
            img: '/img/chef.png',
            recipesCount: '13',
            cuisine: 'عراقي'
        },
        {
            name: 'عيسى عيسى',
            img: '/img/chef.png',
            recipesCount: '5',
            cuisine: 'غربي'
        },
        {
            name: 'أحمد أحمد',
            img: '/img/chef.png',
            recipesCount: '8',
            cuisine: 'تونسي'
        },
        {
            name: 'حمزة حمزة',
            img: '/img/chef.png',
            recipesCount: '4',
            cuisine: 'إيطالي'
        },
    ]
    return (
        <div className='section chiefs'>
            <h1 className='title'>طهاتنا المتميزون</h1>
            <div className='top-chiefs-container'>
                {/* <ChiefCard/>
                <ChiefCard/>
                <ChiefCard/>
                <ChiefCard/>
                <ChiefCard/>
                <ChiefCard/> */}
                {chiefs.map(chief => <ChiefCard key={chief.name} chief={chief}/>)}
            </div>
        </div>
    )
}

export default ChiefSection
