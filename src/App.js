
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import './App.css';
import Carta from './Componets/carta';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <p>React 18 Alpha</p>
      <Container>
        <Carta />
      </Container>
    </Provider>
  );
}

export default App;
