import {ColorModeContext, useMode} from './theme'
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

import Header from './components/Header/Header';

import Loader from './components/Loader/Loader';
import { useAppDispatch } from './hooks/useTypedSelector';
import { loginUser } from './store/slices/userSlice';
import ContentLayout from './components/ContentLayout/ContentLayout';
import Footer from './components/Footer/Footer';


const Home = lazy(()=>import('./pages/Home'))
const News = lazy(()=>import('./pages/News'))
const Login = lazy(()=>import('./pages/Login'));
const Profile = lazy(()=>import('./pages/Profile'))
const Page404 = lazy(()=>import('./pages/Page404'))

function App() {
  const [theme, colorMode] = useMode();
  const dispatch = useAppDispatch();
  useEffect(()=>{
    if(window.localStorage.getItem('isLogin')){
      dispatch(loginUser())
    }
  },[dispatch])

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <Header/>
      <ContentLayout>
      <Suspense fallback={<Loader/>}>
     <Routes>
     <Route path='/news-task' element={<Home/>}/>
      <Route path='/news-task/news' element={<News/>}/>   
      <Route path='/news-task/login' element={<Login/>}/>
      <Route path='/news-task/profile' element={<Profile/>}/>
      <Route path='*' element={<Page404/>}/>
     </Routes>
     </Suspense>
     </ContentLayout>
     <Footer/>
    </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
