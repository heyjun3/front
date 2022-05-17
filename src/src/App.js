import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import SignIn from './templates/SignIn'
import SignUp from './templates/SignUp'
import BoxList from './components/BoxList'
import CustomizedInputBase from './components/Search'
import ApiFecth from './components/ApiFetch';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/list" element={<ApiFecth />} />
          <Route path="/" element={<CustomizedInputBase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
