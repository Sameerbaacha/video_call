import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Make sure this is imported

const ZegoCloud = () => {
  const [value, setvalue] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (value) {
      navigate(`/room/${value}`);
      console.log('click hoggya');
    }
  }, [value, navigate]);

  return (
    <div className="zego-container">
      <div className="zego-card">
        <h2 className="zego-title">Join a Room</h2>
        <input
          type="number"
          placeholder="Enter The Room ID"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          className="zego-input"
        />
        <button onClick={handleJoinRoom} className="zego-button">
          Join
        </button>
      </div>
    </div>
  );
};

export default ZegoCloud;
