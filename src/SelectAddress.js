import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function SelectAddress() {
  const { setAddress } = useContext(CartContext);

  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };

  return (
    <div>
      <h1>Seleziona il tuo indirizzo</h1>
      <button onClick={() => handleAddressChange("Catania 95123")}>Catania</button>
      <button onClick={() => handleAddressChange("Roma 00100")}>Roma</button>
      <button onClick={() => handleAddressChange("Milano 20100")}>Milano</button>
    </div>
  );
}

export default SelectAddress;
