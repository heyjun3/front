import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import SignIn from './templates/SignIn'
import SignUp from './templates/SignUp'
import BoxList from './components/BoxList'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/" element={<SignUp />}/>
          <Route path="list" element={<BoxList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
