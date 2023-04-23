import React from 'react';
import "../css/Page.css"

export const About = () => {
  return (
    <>
      <div className='mainContainer aboutContainer'>
        <h2>This is a web assignment for IT-WEB2Y-S23</h2>
        <div>
          It was made by these students:
          <ul>
            <li>Vladislav Sarafutdinov - 315224</li>
            <li>Syamend Husin Mamo - 317546</li>
          </ul>
        </div>
        <div>
          This website uses these elements:
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>React-Modal</li>
            <li>React-Routing</li>
            <li>PokeApi</li>
            <li>A pinch of love</li>
          </ul>
        </div>
        <br/>
        <i><u>Here's some text from PokeApi website:</u></i>
        <br/>
        <span>
          <h2>What is this?</h2>
          <div>This website provides a RESTful API interface to highly detailed objects built from thousands of lines of data related to Pokémon. We specifically cover the video game franchise. Using this website, you can consume information on Pokémon, their moves, abilities, types, egg groups and much, much more.</div>
          <h2>What is an API?</h2>
          <p>
            An API (Application Programming Interface) is a contract that allow developers to interact with an application through a set of interfaces. In this case, the application is a database of thousands of Pokémon-related objects, and the interfaces are URL links.<br/><br/>
            A RESTful API is an API that conforms to a set of loose conventions based on HTTP verbs, errors, and hyperlinks
          </p>
          <div></div>
        </span>
      </div>
    </>
  )
};

export default About;