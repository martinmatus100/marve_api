import React, { useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/images/marvel-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const headerRef = useRef(null);
    const location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    const isHome = location.pathname === '/';

    return (
        <div ref={headerRef} className="header">
            <div className="header__container">
                {isHome ? "" : <button id="btn_back_header" className='btn header__btn header__btn-back' onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} /></button> }
                <div className="logo">
                    <Link to="/"><img src={logo} alt="" /> <span>API</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
