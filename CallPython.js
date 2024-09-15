import React, { useState } from 'react';

const CallPython = () => {
  const [response, setResponse] = useState('');
  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');

  const callPythonFunction = async () => {
    try {
      const res = await fetch('/app/ml', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          param1: param1,
          param2: param2,
        }),
      });
      const data = await res.json();
      setResponse(data.result);  // Set the result returned from the Flask API
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Call Python Function from React</h1>
      <input
        type="text"
        placeholder="Parameter 1"
        value={param1}
        onChange={(e) => setParam1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Parameter 2"
        value={param2}
        onChange={(e) => setParam2(e.target.value)}
      />
      <button onClick={callPythonFunction}>Run Python Function</button>
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default CallPython;