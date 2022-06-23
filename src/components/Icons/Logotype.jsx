import React from 'react';
import outer from './../../assets/icons/logoOut.svg'
import inner from './../../assets/icons/logoIn.svg'

const LogotypeSmall = (props) => {


    return (
        <>
            <img style={{ position : "absolute",width: '46px',height : "44px"}} src={outer} alt=""/>
            <img style={{ position : "absolute",width: '18px',height : "17px",top: '50%',left: '50%',transform : "translate(-50%,-50%)"}} src={inner} alt=""/>
        </>
    );
}

export default LogotypeSmall;