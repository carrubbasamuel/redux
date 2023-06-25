import { Button, Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleDesc, toggleImg } from '../redux/reducers/api';
import Descrizione from "./descrizione";


export default function Person({ user }) {
    const dispatch = useDispatch();
    const { isDescrizioneAperta } = user;

    const handleClick = () => {
        dispatch(toggleDesc(user.id));
        dispatch(toggleImg(user.id));
    };


    return (
        <Col className={user.isImgAperta ? "colonna carta" : "carta"}>

        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.image} />
                <Card.Body>
                    <Card.Title>{user.firstName}</Card.Title>
                    <Card.Text>{user.email}</Card.Text>
                    <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
                </Card.Body>

                {isDescrizioneAperta && <Descrizione user={user} />}
               
                
            </Card>

            

        </Col>)
}