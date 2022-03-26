import React from 'react';
import './Ouestion.css';

const Question = () => {
    return (
        <div className='qa-section'>
            <h3><b>Question-1: </b> How React Works?</h3>
            <h4><b>Answer: </b> React is a JavaScript Library. React uses JSX (JavaScript XML) for creating html object. It creates a virtual DOM from the objects. If any changes occure in the DOM tree, it re-renders only the changes. These way it saves a lot of expensive painting process on browser.</h4>
            <h3><b>Question-2: </b> What is the difference beween 'props' and 'state'</h3>
            <h4><b>Answer: </b> 'props' is a short form for Properties. It is a parameter for a React's functional stateful Components. With 'props' data can be passed from upper state to the lower components. On the other hand, state holds information about the components present situation. State usually manages its own components data. It also can be changed within its components</h4>
            <h3><b>Question-3: </b> How useState() Works?</h3>
            <h4><b>Answer: </b> </h4>

        </div>
    );
};

export default Question;