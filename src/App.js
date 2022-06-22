import { React, useEffect } from 'react';
import {Outlet} from "react-router-dom"
import Header from "./components/Header/Header";
import {useDispatch} from "react-redux";
import {getCards} from "./redux/reducers/CardsDataReducer";


const App = () => {

    const dispatch = useDispatch()
    useEffect( () =>{
        dispatch(getCards())
    },[])


    return (
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
    );
}

export default App;
