import React from 'react';
import { Button } from './button';
import Link from 'next/link';


const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-zinc-200 pb-2 pt-12 backdrop-blur-2xl dark:bg-zinc-800/30 ">
      <div className="container mx-auto px-6">
        <h1 className="font-bold text-2xl hover:text-emerald-600">honETHly
        <Button className = "float-right align-top hover:bg-emerald-600"
          size="sm"
          variant="default"
        >
          <Link href="/examples/wallet">Connect Your Wallet</Link>
        </Button>
        </h1>
        
      </div>
    </header>
  );
};

export default Header;
