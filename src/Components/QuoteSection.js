import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const QuoteSection = () => {
    return (
        <div className='section quote'>
            <p className='quote-text'>
                <FontAwesomeIcon icon={faQuoteLeft}/>

                A personal website designed specifically for you will give you the freedom to choose and control what is in it, so of course you are expected to put your best work and best vision of your personality, skills and experience.            </p>
            <p className='quote-auther'>Someone</p>
        </div>
    )
}

export default QuoteSection;
