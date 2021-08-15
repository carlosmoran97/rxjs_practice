import React from 'react';
import { Observable } from 'rxjs';
import { IZipcode } from '../../types/maps';
import { GridItem } from './GridItem';

export interface IGridProps {
  zipcodes: IZipcode[];
  store: Map<string, Observable<IZipcode>>;
}

export const Grid: React.FC<IGridProps> = ({ store }): JSX.Element => {
  return (
    <div>
      {Array.from(store).map(([key, value]) => {
        return (
          <GridItem key={key} zipcodeObservable={value} />
        );        
      })}
    </div>
  );
};
