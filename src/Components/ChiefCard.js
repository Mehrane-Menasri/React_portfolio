import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ChiefCard = ({chief}) => {
    return (
        <div className='chief-card'>
            <img src={chief.img} alt=''/>
            <div className='chief-card-info'>
                <h3 className='chief-card-name'>{chief.name}</h3>
                <p className='chief-recipe-count'>عدد الوصفات : <b>{chief.recipesCount}</b></p>
                <p className='chief-cuisine'>المطبخ :<b>{chief.cuisine}</b></p>
                <p className='chief-icons'>
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                </p>
            </div>
        </div>
    )
}

export default ChiefCard
