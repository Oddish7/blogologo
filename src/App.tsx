import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { MainWrapper } from './components/MainWrapper/MainWrapper';
import { Layout } from './components/Layouts/Layout';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { SuccessPage } from './pages/SuccessPage/SuccessPage';
import { SignInPage } from './pages/SignInPage/SIgnInPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { NewPasswordPage } from './pages/NewPasswordPage/NewPasswordPage';
import { ActivationPage } from './pages/ActivationPage/ActivationPage';
import { RegistrationConfirmationPage } from './pages/RegistrationConfirmationPage/RegistrationConfirmationPage';
import { SearchResultsPage } from './pages/SearchResultsPage/SearchResultsPage';
import { OpenPostPage } from './pages/OpenPostPage/OpenPostPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<MainWrapper/>}/>
      <Route path='openpost/:id' element={<OpenPostPage/>}/>

        <Route path='auth'>
          <Route index element={<SignUpPage/>}/>
          <Route path='registrationconfirm' element={<RegistrationConfirmationPage/>}/>
          <Route path='activate' element={<ActivationPage/>}/>
          <Route path='success' element={<SuccessPage/>}/>
          <Route path='signin'>
            <Route index element={<SignInPage/>}/>
            <Route path='forgotpassword' element={<ResetPasswordPage/>}/>
            <Route path='newpassword' element={<NewPasswordPage/>}/>
          </Route>
        </Route>
        
        <Route path='search'>
            <Route index element={<SearchResultsPage/>}/>
            <Route path='openpost/:id' element={<OpenPostPage/>}/>
        </Route>
      </Route>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
