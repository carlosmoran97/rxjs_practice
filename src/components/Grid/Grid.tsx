import React from 'react';
import { Subject } from 'rxjs';
import { IZipcode } from '../../types/maps';
import { GridItem } from './GridItem';
import './Grid.css';

export interface IGridProps {
  store: Map<string, Subject<IZipcode>>;
}

export const Grid: React.FC<IGridProps> = ({ store }): JSX.Element => {
  return (
    <div className="Grid">
      {Array.from(store).map(([key, value]) => {
        return (
          <GridItem key={key} zipcodeSubject={value} />
        );        
      })}
    </div>
  );
};
