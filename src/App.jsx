import './App.css';
import {useState} from 'react'

function App() {
  const[index, setIndex] = useState(0)
  const messages = [
    {mes:'da nuj ce sa zic'},
    {mes:'nici eu '},
    {mes:'de ce mai intreb?'}
  ]

  const nextMessage = () => {
    setIndex((prevIndex) => (prevIndex+1) % messages.length)
  }

  const prevMessage =() => {
    setIndex((prevIndex) => (prevIndex-1) % messages.length)
  }


  return (
    <div className="App">
        <button onClick={prevMessage}>prevMessage</button>
        <div>{messages[index].mes}</div>
        <button onClick={nextMessage}>nextMessage</button>
    </div>
  );
}

export default App;
