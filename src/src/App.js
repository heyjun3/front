import logo from './logo.svg';
import './App.css';
import {Grid} from '@material-ui/core'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import SignIn from './templates/SignIn'
import SignUp from './templates/SignUp'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
