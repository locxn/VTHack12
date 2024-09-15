import microphone from './microphone.svg';
import './App.css';
//import { useState } from 'react';
//import { useSpeechRecognition } from 'react-speech-kit';
//import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useSpeechRecognition from './hooks/useSpeechRecognitionHook.ts';
// import Dictaphone from './components/dictaphone';
//import { ScatterBoxLoaderComponent } from './components/scatterboxloader';
// import testButton from './components/testbtn';
// import Pulsating from './components/pulsating';
var isRecording = 0;

function Mic() {

  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport
  } = useSpeechRecognition();

  return (
    <div >
        {/* <img src={microphone} className="microphone-pulse" alt=""/> */}
        <input id="recordButton" onClick={startListening} type="image" src={microphone} className="microphone" alt=""/>
        <p id="recordBtnText" className="body-header">Tell me about your dream house!</p>
        <p id="speechresult" className="output-text">{text}</p>
     
    </div>
  );
}

function changeMic(){
  var element = document.querySelector("#recordButton");
  var btnText = document.getElementById("recordBtnText");
  // var recordButton = document.getElementById("recordButton");
  if (!isRecording) { //not recording
    //IMPLEMENT: startRecording
    // recordButton.startListening();

    btnText.innerHTML="I'm listening!";
    //replace with pulsing icon
    element.classList.replace("microphone", "microphone-pulse");
    //set boolean true
    isRecording = 1;
  } else { //while recording
    //IMPLEMENT stopRecording
    //IMPLEMENT record information
    // recordButton.stopListening();

    btnText.innerHTML="Let's see what house you want...";
    //replace with static icon
    element.classList.replace("microphone-pulse", "microphone");
    //set boolean false
    isRecording = 0;
  }
}

export default Mic;