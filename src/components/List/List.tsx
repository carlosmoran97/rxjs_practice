import React from 'react';
import { Subject } from 'rxjs';
import { IZipcode } from '../../types/maps';
import './List.css';
import { ListItem } from './ListItem';

export interface IListProps {
  store: Map<string, Subject<IZipcode>>;
}

export const List: React.FC<IListProps> = ({ store }): JSX.Element => {
  return (
    <div className="List">
      {Array.from(store).map(([ value, zipcodeSubject ]) => {
        return (
          <ListItem key={value} zipcodeSubject={zipcodeSubject} />
        );
      })}
    </div>
  );
};
