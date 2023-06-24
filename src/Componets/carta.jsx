import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/reducers/api';
import { useFetch } from '../useFetch';
import Descrizione from './descrizione';

export default function Carta() {
  const dispatch = useDispatch();
  const { data: users } = useSelector((state) => state.api);
  const data = useFetch('https://dummyjson.com/users');

  useEffect(() => {
    if (data && data.users) {
      dispatch(setData(data.users));
    }
  }, [data, dispatch]);


    return (
      <Row>
        { users && data.users.map((user) => (
          <Col key={user.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={user.image} />
              <Card.Body>
                <Card.Title>{user.firstName}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Descrizione />
          </Col>
        ))}
      </Row>
    );
  

  return null; // Gestisci il caso in cui i dati non siano ancora disponibili
}
