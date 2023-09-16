import React from 'react';
import { Button } from './button';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-zinc-200 pb-2 pt-12 backdrop-blur-2xl dark:bg-zinc-800/30">
      <div className="container mx-auto px-6">
        <h1 className="font-bold text-2xl mb-4">honETHly</h1>
      </div>
    </header>
  );
};

export default Header;
