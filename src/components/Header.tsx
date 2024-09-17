import React from 'react';
import { Link } from 'react-router-dom';
import { useLogo } from '../hooks/useLogo';

const Header: React.FC = () => {
  const { logo, loading, error } = useLogo();

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {loading || error ? (
          <h1 className="text-xl font-bold">Adinath Bag Center</h1>
        )  : (
          <img src={logo?.image} alt={logo?.alt} className="h-8 w-auto" />
        )}
        <nav>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/dashboard" className="mx-2">Dashboard</Link>
          <Link to="/tracking" className="mx-2">Bag Tracking</Link>
          <Link to="/customers" className="mx-2">Customer Management</Link>
          <Link to="/cms" className="mx-2">CMS</Link>
          <Link to="/payment" className="mx-2">Payment</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
