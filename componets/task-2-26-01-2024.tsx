import React, { useState } from 'react';


function MyComponent() {
  const [button1State, setButton1State] = useState(false);
  const [button2State, setButton2State] = useState(false);
  const [button3State, setButton3State] = useState(false);

  return (
    <div>
      <button 
       style={{ marginRight: '10px', background: 'red', color: 'white',borderRadius :"30px",textDecorationColor: "black" }}
      onClick={() => setButton1State(!button1State)}>
        {button1State ? 'Activated' : 'Deactivated'}
      </button>
      <button 
       style={{ marginRight: '10px', background: 'red', color: 'white',borderRadius :"30px",textDecorationColor: "black" }}
      onClick={() => setButton2State(!button2State)}>
        {button2State ? 'Activated' : 'Deactivated'}
      </button>
      <button
       style={{ marginRight: '10px', background: 'red', color: 'white',borderRadius :"30px" }}
      onClick={() => setButton3State(!button3State)}>
        {button3State ? 'Activated' : 'Deactivated'}
      </button>
    </div>
  );
}

export default MyComponent;
