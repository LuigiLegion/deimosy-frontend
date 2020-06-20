// Imports
import React, { FunctionComponent } from 'react';

// Component
const MadeBy: FunctionComponent = () => {
  return (
    <div className="text-align-center made-by">
      Made with ❤ by{' '}
      <a
        className="author-name"
        href="https://www.linkedin.com/in/talluigi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-style-bold">Tal Luigi</span>
      </a>
    </div>
  );
};

// Exports
export default MadeBy;
