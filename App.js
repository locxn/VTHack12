import './App.css';
import React, {useState,useEffect} from 'react'
import useSpeechRecognition from './hooks/useSpeechRecognitionHook.ts';
import microphone from './microphone.svg'
// import recordButton from './record_btn';
// import Mic from './mic';
import InfoCard from './info.js';


const callPythonFunction = async (setRes,setInfo,input) => {
  try {
    const res = await fetch('/app/ml', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_request: input,
      }),
    });
    const data = await res.json();
    console.log(data.res.response);  // Set the result returned from the Flask API
    setRes(data.res.response)
    setInfo(data.res.info)
  } catch (error) {
    console.error('Error:', error);
  }
};


function App() {

  const [res, setRes] = useState("")
  const [info, setInfo] = useState("")
  const [count,setCount] = useState("0")



  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport
  } = useSpeechRecognition();

  const aftertext = "Let's find your dream home"
  const [input, setInput] = useState(text)

  // Call this function only when 'text' (recognized speech) changes
  useEffect(() => {
    if (text && !isListening) { // Only trigger when listening ends
      setInput(text);
      console.log('Speech Recognition Ended:', text);
      callPythonFunction(setRes, setInfo, text); // Call Python function after listening ends
    }
  }, [text, isListening]); // Only runs when 'text' or 'isListening' changes

  return (
  <>
    <div className="App">
      <header className="App-header">
      <input id="recordButton" onClick={startListening} type="image" src={microphone} className="microphone-pulse" alt=""/>
        <p id="recordBtnText" className="body-header">Tell me about your dream house!</p>
        <p id="speechresult" className="output-text" >{text}</p>

      </header>

    <h1 className="text-pop-up">
    {aftertext.split("").map((letter, index) => (
    <span key={index} className="new-color" style={{ "--i": index + 1 }}>
      {letter === " " ? "\u00A0" : letter}
    </span>
        ))}
      </h1>
      
      {info !== "" &&(<InfoCard info={info}>ge</InfoCard>)}
  

        <div className='response-container'>
          <div className='response'>{res}</div>
          
        </div>
      </div>
</>
  );
}

export default App;
