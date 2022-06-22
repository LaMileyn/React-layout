import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux";
import MainPage from "./pages/MainPage/MainPage";
import './styles/variables.scss'
import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path={"services"} element={<Navigate to={<MainPage/>}/>}/>
                    <Route path={"pricing"} element={<Navigate to={<MainPage/>}/>}/>
                    <Route path={"blog"} element={<Navigate to={<MainPage/>}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);
