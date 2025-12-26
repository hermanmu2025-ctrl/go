import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = "http://localhost:5000/api";

function App() {
  const [status, setStatus] = useState("Checking...");
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE}/status`)
      .then(res => setStatus(res.data.status))
      .catch(() => setStatus("Offline"));
  }, []);

  const sendData = async () => {
    try {
      const res = await axios.post(`${API_BASE}/data`, 
        { payload: "Elite Nexus v5.0 Active" },
        { headers: { 'x-api-key': 'your_secret_api_key_here' } }
      );
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: err.response?.data?.error || "Connection Failed" });
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>DevNexus System Status: {status}</h1>
      <button onClick={sendData} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Execute Secure Request
      </button>
      {response && (
        <pre style={{ marginTop: '20px', background: '#eee', padding: '10px' }}>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;