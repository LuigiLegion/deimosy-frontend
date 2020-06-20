// Imports
import React, { useState, FunctionComponent } from 'react';

import { NavbarProps } from './interfaces';
import Logo from './Logo';
import Burger from './Burger';
import Links from './Links';

// Component
const Navbar: FunctionComponent<NavbarProps> = ({ clear, setClear }) => {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Logo />

        <Burger active={active} setActive={setActive} />
      </div>

      <Links
        active={active}
        setActive={setActive}
        clear={clear}
        setClear={setClear}
      />
    </nav>
  );
};

// Exports
export default Navbar;
