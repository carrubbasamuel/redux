import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi, setData } from '../redux/reducers/api';
import Person from './person';

export default function Carta() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.api);

  useEffect(() => {
    const fetchData = async () => {
      const result = await dispatch(fetchApi());
      if (result.meta.requestStatus === 'fulfilled') {
        dispatch(setData(result.payload));
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <Row>
      {data && data.map((user) => (
        <Person key={user.id} user={user} />
      ))}
    </Row>
  );
}
