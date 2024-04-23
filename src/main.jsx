import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { AboutPage } from './pages/AboutPage/AboutPage.jsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.jsx';
import { HousePage } from './pages/HousePage/HousePage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/about' element={<AboutPage />}></Route>
                <Route path='/house/:id' element={<HousePage />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
);
