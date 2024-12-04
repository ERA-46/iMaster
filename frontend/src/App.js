import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/navbar';
import Items from './pages/items';
import NewItem from './components/addNewItem';
import UpdateItem from './components/updateItem';
import Jobs from './pages/jobs';
import NewJob from './components/addNewJob';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/items' element={<Items/>}/>
          <Route path='/items/add-new-item' element={<NewItem/>}/>
          <Route path='/items/:itemId/update-item' element={<UpdateItem/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='/jobs/add-new-job' element={<NewJob/>}/>
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>      
    </div>
  );
}

export default App;
