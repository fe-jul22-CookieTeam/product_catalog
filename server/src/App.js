import React, { useState } from 'react';
import { PhonesList } from './PhonesList';
import { Phone } from './types/phones';
import { getAll } from 'api';

export const App = () => {
  const [phones, setPhones] = useState([]);

  const visiblePhones = async request => {
    setPhones(await request());
  };

  return (
    <div className="App">
      <button
      type="button"
      onClick={() => getAll}
      >
        Mobile phones
        </button>

        <PhonesList phones={ phones } />
    </div>
  );
}
