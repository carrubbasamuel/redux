import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/reducers/api';
import { useFetch } from '../useFetch';
import Ciao from './ciao';


export default function Carta() {
  const dispatch = useDispatch();
  const { data: people } = useSelector((state) => state.api);


 

  const data = useFetch('https://dummyjson.com/users');
  
  useEffect(() => {
    if (data) {
      const newData = data.users.map((user) => ({
        ...user,
        isDescrizioneAperta: false,
      }));
      dispatch(setData(newData));
    }
  }, [data, dispatch]);



    return (
      <Row>
        {people && people.map((user) => (
          <Ciao key={user.id} user={user} />
        ))}
      </Row>
    );
}
