import { useState } from 'react';
import './App.css';
import { View } from './components/View/View';
import { IZipcode } from './types/maps';

function App() {
  const [zipcodes] = useState<IZipcode[]>([
    {
      value: '1',
      selected: false
    },
    {
      value: '2',
      selected: false
    },
    {
      value: '3',
      selected: false
    },
    {
      value: '4',
      selected: false
    },
    {
      value: '5',
      selected: false
    },
    {
      value: '6',
      selected: false
    },
    {
      value: '7',
      selected: false
    },
    {
      value: '8',
      selected: false
    },
    {
      value: '9',
      selected: false
    }
  ]);
  return (
    <div className="App">
      <View zipcodes={zipcodes} />
    </div>
  );
}

export default App;
