// Imports
import React, { FunctionComponent } from 'react';

// Component
const Preloader: FunctionComponent = () => {
  return (
    <div id="p5_loading" className="loadingclass">
      <img
        src="https://media1.giphy.com/media/feN0YJbVs0fwA/giphy.gif?cid=ecf05e4738dacd9849ec94b66fd317161c02f8eb77017f34&rid=giphy.gif"
        alt="preloader"
      />
    </div>
  );
};

export default Preloader;
