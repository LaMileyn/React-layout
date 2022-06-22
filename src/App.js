import { React, useEffect } from 'react';
import {Outlet} from "react-router-dom"
import Header from "./components/Header/Header";
import {useDispatch} from "react-redux";


const App = () => {

    const dispatch = useDispatch()
    useEffect( () =>{
        // dispatch()
    },[])


    return (
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
    );
}

export default App;
