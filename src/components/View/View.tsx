import React, { useEffect, useState } from 'react';
import { BehaviorSubject, Subject } from 'rxjs';
import { IZipcode } from '../../types/maps';
import { Grid } from '../Grid';
import { List } from '../List';
import './View.css';

export interface IViewProps {
  zipcodes: IZipcode[];
};

export const View: React.FC<IViewProps> = ({ zipcodes }): JSX.Element => {
  const [store, setStore] = useState<Map<string, Subject<IZipcode>>>(new Map());

  useEffect(() => {
    const kvArray = zipcodes.map((zipcode): [string, Subject<IZipcode>] => {
      return [zipcode.value, new BehaviorSubject<IZipcode>(zipcode)];
    });
    const map = new Map(kvArray);
    setStore(map);
  }, []);

  return (
    <div className="View">
      <Grid store={store} />
      <List store={store} />
    </div>
  );
};
