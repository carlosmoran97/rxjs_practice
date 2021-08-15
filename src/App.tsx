import { useState } from 'react';
import './App.css';
import { View } from './components/View/View';
import { IZipcode } from './types/maps';

function App() {
  const [zipcodes] = useState<IZipcode[]>([
    {
      value: '1',
      selected: true
    },
    {
      value: '2',
      selected: false
    },
    {
      value: '3',
      selected: true
    },
    {
      value: '4',
      selected: false
    },
    {
      value: '5',
      selected: true
    },
    {
      value: '6',
      selected: false
    },
    {
      value: '7',
      selected: true
    },
    {
      value: '8',
      selected: false
    },
    {
      value: '9',
      selected: true
    }
  ]);
  return (
    <div className="App">
      <View zipcodes={zipcodes} />
    </div>
  );
}

export default App;
