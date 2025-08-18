import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fineest fishers of the world, we bring you the best quality fish. Our fish are sourced from sustainable fisheries and are delivered fresh to your doorstep.",

  },
  {
    title: "Becoming a member of the team",
    text: "From they fineest fishers of the world, we bring you the best quality fish. Our fish are sourced from sustainable fisheries and are delivered fresh to your doorstep.",

  },
  {
    title: "Message or am nothing",
    text: "From they fineest fishers of the world, we bring you the best quality fish. Our fish are sourced from sustainable fisheries and are delivered fresh to your doorstep.",

  },
  {
    title: "Really boy law coiuntrty",
    text: "From they fineest fishers of the world, we bring you the best quality fish. Our fish are sourced from sustainable fisheries and are delivered fresh to your doorstep.",

  }
]

const Features = () => {
  return (
      <div className='gpt3__features section__padding' id='features'>
        <div className='gpt3__features-heading'>
          <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className='gpt3__features-container'>
          {featuresData.map((item, index)=>(
            <Feature title={item.title} text={item.text} key={item.title + index}/>
          )
          )}
        </div>
      </div>
  )
}

export default Features
