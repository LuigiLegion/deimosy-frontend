// Imports
import React, { useState, FunctionComponent } from 'react';

import Navbar from './components/navbar/Navbar';
import P5 from './components/p5/P5';
import MadeBy from './components/layout/MadeBy';

// Component
const App: FunctionComponent = () => {
  const [clear, setClear] = useState(false);

  return (
    <div className="App">
      <Navbar clear={clear} setClear={setClear} />

      <P5 clear={clear} />

      <MadeBy />
    </div>
  );
};

// Exports
export default App;
