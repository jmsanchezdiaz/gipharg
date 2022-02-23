import React, { useState, useEffect, useRef } from 'react';
import { apiCall } from '../../helpers/apiCall';
import { GifType } from '../../types/interfaces';
import TrendingList from './TrendingList';
import './Trendings.scss';

const Trendings: React.FC = () => {
  const [trendings, setTrendings] = useState<GifType[]>([]);
  const isMount = useRef(true);

  useEffect(() => {
    apiCall.trendings().then((res) => {
      const { data } = res;
      if (isMount.current) {
        setTrendings(data);
      }
    });

    return () => {
      isMount.current = false;
    };
  }, []);

  return (
    <div className='trendings'>
      <h1 className='trendings__title'>Trendings</h1>
      <TrendingList trendings={trendings} />
      <hr />
    </div>
  );
};

export default Trendings;
