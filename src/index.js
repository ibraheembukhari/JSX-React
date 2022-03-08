// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const buttonText = "Click Me!";
const App = () => {
    return (
        <div>
            <label className='label' htmlFor='name'>
                Name
            </label>
            <input id='name' type='text'/>
            <button style={{backgroundColor:'blue', color:'white'}}>{buttonText}</button>
        </div>
    )
    
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));