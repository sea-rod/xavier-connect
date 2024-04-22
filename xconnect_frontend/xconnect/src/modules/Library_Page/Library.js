// CombinedComponent.jsx
import React from 'react';
import SearchBar from './SearchBar';
import Navbar from './Dropdownlist';
import CardSection from './CardSection';
import Book1 from './Book1';
import Newpage from './Newpage';


const CombinedComponent = () => {
  return (
    <div>
      <SearchBar />
      <CardSection />
     
      <Newpage/>
    </div>
  );
};

export default CombinedComponent;
