import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🗨️ Chat Application</h1>
        <h2>Two People Can Talk Together!</h2>
        <div style={{ maxWidth: '600px', textAlign: 'left', margin: '20px 0' }}>
          <h3>How to use:</h3>
          <ol style={{ textAlign: 'left' }}>
            <li><strong>Create Account:</strong> Sign up with email/password or Google</li>
            <li><strong>Find People:</strong> Search for users by name or email</li>
            <li><strong>Start Chatting:</strong> Click "Chat" button next to any user</li>
            <li><strong>Real-time Messages:</strong> Type and press Enter to send messages</li>
            <li><strong>Multiple Chats:</strong> Switch between different conversations</li>
          </ol>
          
          <h3>Features:</h3>
          <ul style={{ textAlign: 'left' }}>
            <li>✅ Real-time messaging with Firebase</li>
            <li>✅ User authentication (Email/Password + Google)</li>
            <li>✅ Search and find other users</li>
            <li>✅ Recent chats sidebar</li>
            <li>✅ Mobile responsive design</li>
            <li>✅ Modern dark theme UI</li>
          </ul>
        </div>
        
        <div style={{ margin: '30px 0' }}>
          <p style={{ fontSize: '16px', marginBottom: '20px' }}>
            The chat application is integrated into the main page at:
          </p>
          <a 
            href="/" 
            style={{
              background: '#6c7cff',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold'
            }}
          >
            🚀 Go to Chat App
          </a>
        </div>
        
        <p style={{ marginTop: '30px', fontSize: '14px', opacity: 0.8 }}>
          Note: The actual chat interface is in the public/index.html file
        </p>
      </header>
    </div>
  );
}

export default App;
