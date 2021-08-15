import React, { useEffect, useState } from 'react';
import { Observable, of } from 'rxjs';
import { IZipcode } from '../../types/maps';
import { Grid } from '../Grid';
import { List } from '../List';

export interface IViewProps {
  zipcodes: IZipcode[];
};

export const View: React.FC<IViewProps> = ({ zipcodes }): JSX.Element => {
  const [store, setStore] = useState<Map<string, Observable<IZipcode>>>(new Map());

  useEffect(() => {
    const kvArray = zipcodes.map((zipcode): [string, Observable<IZipcode>] => {
      return [zipcode.value, of( zipcode )];
    });
    const map = new Map(kvArray);
    setStore(map);
  }, []);

  return (
    <div>
      <Grid zipcodes={zipcodes} store={store} />
      <List />
    </div>
  );
};
