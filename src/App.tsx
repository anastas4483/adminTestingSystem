import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { HomePage } from './pages/home';
import { TestsPage } from './pages/tests';
import { UsersPage } from './pages/users';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='tests' element={<TestsPage />} />
        <Route path='users' element={<UsersPage />} />
      </Routes>
    </>
  );
}

export default App;
