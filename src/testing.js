import React from 'react';

function App1() {

  let hello = () => {
    alert('Hello PMK');
  }

  let hi = (e) => {
    alert(e.target.value + ' button is clicked');
  }

  let changeBackgroundColor = e => {
    document.bgColor = e.target.value;
  }

  return (
    <div>
      <input type="button" value="Hello" onClick={hello} />
      <br/>
      <input type="button" value="Hi" onClick={hi} />
      <br/>
      <input type="button" value="Red" onClick={changeBackgroundColor} />
      <input type="button" value="Green" onClick={changeBackgroundColor} />
      <input type="button" value="Blue" onClick={changeBackgroundColor} />
    </div>
  );
};

export default App1;