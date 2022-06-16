import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Logo from '../../assets/img/Vector.svg';
import User from '../../assets/img/Юзер.svg';
import NotUser from '../../assets/img/Фото.svg';
import Calendar from '../../assets/img/Календарь.svg';
import Event from '../../assets/img/Уведомления.svg';
import VectorDown from '../../assets/img/VectorDown.svg';
import './Header.css';

export const Header = () => {

  const {isAuth, email} = useAuth();

  return (
    <header className="header">
      <div className="header_logo">
        <NavLink to='/'>
          <img src={Logo} alt={'Logo'}/>
        </NavLink>
        <div className="header_search">
          <button className="header_search_icon" ></button>
          <input type='text' placeholder='Поиск'/>
        </div>
      </div>
      <div className="header_left_item">
        <div className="header_events">
          <img src={Calendar} alt={'Calendar'}/>
          <img src={Event} alt={'Event'}/>
        </div>
        <div className="header_line"/>
        <div className="header_authorization">
          <img src={isAuth ? User : NotUser} alt={'User'}/>
          <NavLink to={isAuth ? '/personal_account' :'/authorization'}>
            <p className="header_text_link">
              {isAuth ? email : 'Вход в аккаунт'} 
            </p>
          </NavLink>
          <img 
            src={VectorDown} 
            alt={'VectorDown'} 
            className="header_header_authorization_img"
          />
        </div>
      </div>
    </header>
  )
};
