import { useDispatch } from "react-redux";
import { setData } from "../redux/reducers/api";

export default function Descrizione() {
  const dispatch = useDispatch();
  const { data: users } = useSelector((state) => state.api);

  if (!users) {
    return null;
  } else {
    const data = users.slice(0, 10);
    console.log(data);
    dispatch(setData(data));
  }

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
    </div>
  );
}
