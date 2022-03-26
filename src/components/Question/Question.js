import React from 'react';
import './Ouestion.css';

const Question = () => {
    return (
        <div>
            <h3>Question Answer Section</h3>
            <div className='qa-section'>
                <h4><b>Question-1: </b> How React Works?</h4>
                <p><b>Answer: </b> React is a JavaScript Library. React uses JSX (JavaScript XML) for creating html object. It creates a virtual DOM from the objects. If any changes occure in the DOM tree, it re-renders only the changes. These way it saves a lot of expensive painting process on browser.</p>
                <h4><b>Question-2: </b> What is the difference beween 'props' and 'state'?</h4>
                <p><b>Answer: </b> 'props' is a short form for Properties. It is a parameter for a React's functional stateful Components. With 'props' data can be passed from upper state to the lower components. On the other hand, state holds information about the components present situation. State usually manages its own components data. It also can be changed within its components.</p>
                <h4><b>Question-3: </b> How useState() Works?</h4>
                <p><b>Answer: </b> In React useState is a hook. A hook is a function that enables hooking into a components state and lifecycle feature. useState returns an array of two things: a variable with the current state value and a function for updating the variable. Initial state of the veriable is passed as an argument.</p>
            </div>
        </div>
    );
};

export default Question;