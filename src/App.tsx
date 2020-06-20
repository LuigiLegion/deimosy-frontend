// Imports
import React, { useState, FunctionComponent } from 'react';

import Navbar from './components/Navbar';
import P5 from './components/P5';
import MadeBy from './components/MadeBy';

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
