import React, { useState } from 'react';


function App() {
  const [isMoving, setIsMoving] = useState(false);

  const handleMoveButtonClick = () => {
    setIsMoving(!isMoving);
  };

  return (
    <div className="container">
      <div className={`box ${isMoving ? 'moving' : ''}`}></div>
      <button onClick={handleMoveButtonClick}>Move</button>
    </div>
  );
}

export default App;
