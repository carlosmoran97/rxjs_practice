import React, { useState, useEffect } from 'react';
import { Subject } from 'rxjs';
import { IZipcode } from '../../types/maps';
import './ListItem.css';

export interface IListItemProps {
  zipcodeSubject: Subject<IZipcode>;
}

export const ListItem: React.FC<IListItemProps> = ({ zipcodeSubject }): JSX.Element => {
  const [zipcode, setZipcode] = useState<IZipcode>({
    selected: false,
    value: ''
  });

  useEffect(() => {
    const zipcodeSuscrition = zipcodeSubject?.subscribe((zipcode) => {
      setZipcode(zipcode);
    });
    return () => zipcodeSuscrition?.unsubscribe();
  }, []);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    zipcodeSubject.next({
      value: zipcode.value,
      selected: e.target.checked
    });
  };

  return (
    <div className="ListItem">
      <input onChange={onChange} type="checkbox" checked={zipcode.selected} />{' '}<span>{zipcode?.value}</span>
    </div>
  );
};
