import React from 'react'
import CustomImage from './CustomImage'

const HeroSection = () => {
    const images = [
        "/img/1.png",
        "/img/2.png",
        "/img/3.png",
        "/img/4.png",
        "/img/5.png",
        "/img/6.png",
        "/img/7.png",
        "/img/8.png",
        "/img/9.png"
    ]
    return (
        <div className='section hero'>
            <div className='col typography'>
                <h3>Hello I'm</h3>
                <h1 className='title'>Rabeh Mokhtary</h1>
                <p className='info'>Algerian programmer, and freelance worker, I program and design various programs and applications, whether websites, desktop or mobile, With the latest programming and design techniques, my applications are modern and respond to the various requirements of customers
</p>
                <button className='btn'>Hire Me</button>
            </div>
            <div className='col gallery'>
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc = {src} pt={"100%"} />
                ))}
                
            </div>
        </div>
    )
}

export default HeroSection
