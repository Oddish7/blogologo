import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { MainWrapper } from './components/MainWrapper/MainWrapper';
import { Layout } from './components/Layouts/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainWrapper/>}/>
        </Route>

      {/* <Route path='search'>
          <Route index element={<SearchResultsPage/>}/>
          <Route path='openpost/:id' element={<OpenPostPage/>}/>
      </Route> */}
    </Routes>
  );
}

export default App;
