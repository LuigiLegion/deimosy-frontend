// Imports
import React, { FunctionComponent } from 'react';

// Component
const Logo: FunctionComponent = () => {
  return (
    <a
      className="navbar-item nav navbar-logo-container"
      href="/"
      onClick={event => event.preventDefault()}
    >
      <span className="text-style-bold navbar-logo-containee">Deimosy</span>
    </a>
  );
};

// Exports
export default Logo;
