import { Button, Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleDesc } from '../redux/reducers/api';
import Descrizione from "./descrizione";


export default function Ciao({ user }) {
    const dispatch = useDispatch();
    const { isDescrizioneAperta } = user;

    
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.image} />
                <Card.Body>
                    <Card.Title>{user.firstName}</Card.Title>
                    <Card.Text>{user.email}</Card.Text>
                    <Button variant="primary" onClick={() => dispatch(toggleDesc(user.id))}>Go somewhere</Button>
                </Card.Body>
                {isDescrizioneAperta && <Descrizione />}
                
            </Card>

        </Col>)
}