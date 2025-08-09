import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

const App: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [realTimeData, setRealTimeData] = useState<any[]>([]);

  useEffect(() => {
    const newSocket = io('ws://localhost:3001');
    setSocket(newSocket);

    newSocket.on('data-update', (data) => {
      setRealTimeData(prev => [...prev, data].slice(-100));
    });

    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Dashboard data={realTimeData} socket={socket} />
      </div>
    </ThemeProvider>
  );
};

export default App;