import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setRubrica } from "../redux/reducers/rubrica";

export default function Descrizione({ user }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setRubrica(user));
  };

  return (
    <div>
      <h1>Descrizione</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, voluptate, quibusdam, quia voluptas quod quos voluptatibus
        quae voluptatem doloribus quas. Quisquam, quia voluptas quod quos
        voluptatibus quae voluptatem doloribus quas. Quisquam, quia voluptas
        quod quos voluptatibus quae voluptatem doloribus quas.
      </p>
      <Button onClick={handleClick} variant="success">
        Add
      </Button>
    </div>
  );
}
