import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/navbar';
import Items from './pages/items';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <div className="pages">
        <Routes>
          <Route path='/' element={<Items/>}/>

        </Routes>
      </div>


      </BrowserRouter>      
    </div>
  );
}

export default App;
