import React from 'react';
import Logo from '../../assets/img/Vector.svg'
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">

    <div className="footer_up_block">
      <div className="footer_block_1">
        <img src={Logo} alt={"Logo"}/>
        <p>
          Открытое акционерное общество <br/>
          «Реестр ПО» начало практическую <br/>
          деятельность с 1 марта 2014 г
        </p>
        <div className="footer_block_1_content">
          <h4>Разработчик</h4>
          <p className="footer_block_1_text_one">
            ОАО «Агентство сервисизации и реинжиниринга»
          </p>
          <p className="footer_block_1_text_two">
            Минск, улица Клары Цеткин, 24
          </p>
        </div>

      </div>

      <div className="footer_block_2">
        <h4>Информация</h4>
        <ul className="footer_block_2_list">
          <li>Реестры</li>
          <li>Новости</li>
          <li>Документы</li>
          <li>Вопросы</li>
        </ul>
      </div>

      <div className="footer_block_3">
        <h4>Техническая поддержка</h4>
          <p>
            Ежедневно с 8.00 до 19.00, <br/>
            за исключением выходных (суббота, <br/>
            воскресенье) и праздничных дней.
          </p>
          <ul className="footer_block_2_list footer_mr_down">
            <li>+375 25 111 22 33 </li>
            <li>+375 29 222 44 55</li>
            <li>ReestrPOsupport@mail.ru</li>
          </ul>
      </div>

      <div className="footer_block_4">
        <h4>Контакты</h4>
        <ul className="footer_block_2_list">
          <li>+375 33 112 22 45</li>
          <li>+375 29 222 44 88</li>
          <li>ReesrtPO@mail.ru</li>
          <li>220004 г. Минск, ул. Карла Маркса, 38</li>
          <li className="footer_item_blue">Связаться с поддержкой</li>
        </ul>
      </div>
    </div>
     
    <div className="footer_down_block">
      <p>© Copyright 2022 — ОАО «РеестрПО». Все права защищены.</p>
    </div>

    </div>
  )
};

