import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Lets Build Something amazing with GPT-3 OpenAI</h1>
        <p>What is a paragraph? Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder="Your Email Address"/>'
          <button type="button">Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="People"/>
          <p>1,600 people requested access a visit in the last 24 hours</p>
        </div>
        {/* <div className='gpt3__header-image'>
          <img src={ai} alt="ai"/>
        </div> */}
      </div>
    </div>
  )
}

export default Header
