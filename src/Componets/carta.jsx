import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/reducers/api';
import { useFetch } from '../useFetch';
import Person from './person';


export default function Carta() {
  const dispatch = useDispatch();
  const { data: people } = useSelector((state) => state.api);




  const data = useFetch('https://dummyjson.com/users');

  useEffect(() => {
    if (data) {
      dispatch(setData(data.users));
    }
  }, [data, dispatch]);



  return (
    <Row>
      {people && people.map((user) => (
        <Person key={user.id} user={user} />
      ))}
    </Row>
  );
}
