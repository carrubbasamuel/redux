import React, { useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi, setData, toggleLoading } from '../redux/reducers/api';
import Person from './person';

export default function Carta() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.api);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(toggleLoading());
      const result = await dispatch(fetchApi());
      if (result.meta.requestStatus === 'fulfilled') {
        dispatch(setData(result.payload));
      }
      dispatch(toggleLoading());
    };
    fetchData();
  }, []);


  
  return (
    <Row>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        data && data.map((user) => (
          <Person key={user.id} user={user} />
        ))
      )}
    </Row>
  );
}
