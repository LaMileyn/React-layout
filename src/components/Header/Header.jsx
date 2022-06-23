import React from 'react';
import s from './Header.module.scss';
import {Link} from "react-router-dom";
import Logotype from "../Icons/Logotype";
import MediaQuery from 'react-responsive'

const Header = (props) => {
    return (
        <div className={s.header}>
            <MediaQuery minWidth={1041}>
                <div className={s.header__container}>
                    <div className={s.header__logo}>
                        <div className={s.logo}>
                            <Logotype/>
                        </div>
                        <h3>Agency</h3>
                    </div>


                    <nav className={s.header__nav}>
                        <ul className={s.header__links}>
                            <li><Link className={s.header__links} to={"/"}>About</Link></li>
                            <li><Link className={s.header__links} to={"/"}>Services</Link></li>
                            <li><Link className={s.header__links} to={"/"}>Pricing</Link></li>
                            <li><Link className={s.header__links} to={"/"}>Blog</Link></li>
                        </ul>
                    </nav>


                    <div className={s.header__btn}>
                        <button>CONTACT</button>
                    </div>
                </div>
            </MediaQuery>
            {/*---------------------------------------*/}
            <MediaQuery maxWidth={1040}>
                <div className={s['header__contaner-small-devices']}>
                    <div className={s.header__logo}>
                        <div className={s.logo}>
                            <Logotype/>
                        </div>
                        <h3>Agency</h3>
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default Header;