import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter >
    <Route exact path='/' component={Login} />
    <Route path='/register'component={Register} />
    <Route path='/products' component={Products} />
    </BrowserRouter>    
  );
}

export default App;