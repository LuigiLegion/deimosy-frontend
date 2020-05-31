// Imports
import React, { useState, FunctionComponent } from 'react';

import Navbar from './Navbar';
import P5 from './P5';
import MadeBy from './MadeBy';

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

export default App;
