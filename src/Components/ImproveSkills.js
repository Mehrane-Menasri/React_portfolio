import React from 'react';

const ImproveSkills = () => {
    const list = [
        "HTML CSS & JS",
        "PHP & MYSQL",
        "BOOTSTRAP & TAILWINDCSS",
        "LARAVEL",
        "REACT JS",
        "NODE JS"
    ]
    return (
        <div className='section improve-skills'>
            <div className='col img'>
                <img src='/img/skills.png'/>
            </div>
            <div className='col typography'>
                <h1 className='title'>My skills</h1>
                {list.map((item, index) => (
                    <p className='skill-item' key={index}>{item}</p>
                ))}
                <button className='btn'>Contact Us</button>
            </div>
        </div>
    )
}

export default ImproveSkills;
