import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter >
    <Route exact path='/' component={Login} />
    <Route path='/register'component={Register} />
    <Route exact path='/products' component={Products} />
    <Route path='/product/:id' component={Product} />
    </BrowserRouter>    
  );
}

export default App;
