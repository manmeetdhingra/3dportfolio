import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ( {text, link, btnText} ) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>{btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className='font-semibold'>Manmeet Dhingra</span> 👋 
            <br />
            A Pharmacist and A Software Engineer.
        </h1>
    ),
    2: (
        <InfoBox 
        text="From Prescriptions to Programmes - Click below to learn more about me"
        link='/about'
        btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
        text="Crafting Solutions, One Line of Code at a Time."
        link='/projects'
        btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
        text="Get in Touch – Let’s Turn Ideas into Reality."
        link='/contact'
        btnText="Let's Talk"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
