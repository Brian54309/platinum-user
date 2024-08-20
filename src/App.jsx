import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Car from './pages/Car';
import CarDetail from './pages/CarDetail';
import Login from './pages/Login';
import SignUp from './pages/Signup';

const App = () => (
  <Routes>
    <Route
      path="/"
      element={<Home />}
    />
    <Route
      path="/search"
      element={<Search />}
    />
    <Route
      path="/car"
      element={<Car />}
    />
    <Route
      path="/car/:id"
      element={<CarDetail />}
    />
    <Route
      path="/login"
      element={<Login />}
    />
    <Route
      path="/SignUp"
      element={<SignUp />}
    />
  </Routes>
);

export default App;
