import React, { useState, useEffect } from 'react';
import { Observable } from 'rxjs';
import { IZipcode } from '../../types/maps';

export interface IGridItemProps {
  zipcodeObservable: Observable<IZipcode> | undefined;
}

export const GridItem: React.FC<IGridItemProps> = ({ zipcodeObservable }): JSX.Element => {
  const [zipcode, setZipcode] = useState<IZipcode>();

  useEffect(() => {
    const zipcodeSuscrition = zipcodeObservable?.subscribe((zipcode) => {
      setZipcode(zipcode);
      console.log(zipcode);
    });
    return () => zipcodeSuscrition?.unsubscribe();
  }, []);

  return (
    <div>
      {zipcode?.value}
    </div>
  );
};
