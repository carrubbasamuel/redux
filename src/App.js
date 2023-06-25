
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import './App.css';
import Cart from './Componets/cart';
import Carta from './Componets/carta';
import store from './redux/store';



function App() {
  return (
    <Provider store={store}>
      <Container>
        <Cart />
        <Carta />
      </Container>
    </Provider>
  );
}

export default App;
