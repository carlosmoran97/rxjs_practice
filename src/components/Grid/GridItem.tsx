import React, { useState, useEffect } from 'react';
import { Observable, Subject } from 'rxjs';
import { IZipcode } from '../../types/maps';
import cn from 'classnames';
import './GridItem.css';

export interface IGridItemProps {
  zipcodeSubject: Subject<IZipcode> | undefined;
}

export const GridItem: React.FC<IGridItemProps> = ({ zipcodeSubject }): JSX.Element => {
  const [zipcode, setZipcode] = useState<IZipcode>();
  const classNames = cn('GridItem', {
    'GridItem--unselected': !zipcode?.selected
  });

  useEffect(() => {
    const zipcodeSuscrition = zipcodeSubject?.subscribe((zipcode) => {
      setZipcode(zipcode);
    });
    return () => zipcodeSuscrition?.unsubscribe();
  }, []);

  console.log(`Render: ${zipcode?.value}`);

  const onClick = () => {
    zipcodeSubject?.next({
      value: `${zipcode?.value}`,
      selected: !zipcode?.selected
    });
  };

  return (
    <div className={classNames} onClick={onClick}>
      {zipcode?.value}
    </div>
  );
};
