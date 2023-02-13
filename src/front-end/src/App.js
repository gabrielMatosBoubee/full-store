import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter >
    <Route exact path='/' component={Login} />
    </BrowserRouter>    
  );
}

export default App;
