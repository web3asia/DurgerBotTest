import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <a href="./_app.tsx" style={{ backgroundColor: 'blue', color: 'white', padding: '20px 40px', textDecoration: 'none', fontSize: '24px', borderRadius: '8px' }}>
        Click Me
      </a>
    </div>
  );
};

export default App;
