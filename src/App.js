import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <main className="App bg-review-hub-base">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </main>
  );
}

export default App;
