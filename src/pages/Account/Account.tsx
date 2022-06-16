import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeUser } from '../../store/slices/userSlice';
import { Navigate } from 'react-router-dom';
import User from '../../assets/img/Юзер.svg';
import account_1 from '../../assets/img/account_1.svg';
import account_2 from '../../assets/img/account_2.svg';
import account_3 from '../../assets/img/account_3.svg';
import account_4 from '../../assets/img/account_4.svg';
import account_5 from '../../assets/img/account_5.svg';
import account_6 from '../../assets/img/account_6.svg';
import account_7 from '../../assets/img/account_7.svg';
import './Account.css';



export const Account = () => {

  const {isAuth, email} = useAuth();
  const dispatch = useAppDispatch();

  const listMenu = [
    {id: 1, text: 'Мои данные', img: account_1},
    {id: 2, text: 'Уведомления', img: account_2},
    {id: 3, text: 'Реестры', img: account_3},
    {id: 4, text: 'Метаданные', img: account_4},
    {id: 5, text: 'Безопасность', img: account_5},
    {id: 6, text: 'Мои загрузки', img: account_6},
  ];

  const [firstName, setFirstName] = useState<string>('Захар');
  const [middleName, setMiddleName] = useState<string>('Палазник');
  const [lastName, setLastName] = useState<string>('');
  const [city, setCity] = useState<string>('Минск');
  const [county, setCountry] = useState<string>('');
  const [phone, setPhone] = useState<string>('+375 22 111 33 44');
  const [newPassword, setNewPassword] = useState<string>('12345678');
  const [checkPassword, setCheckPassword] = useState<string>('87654321');


  return(
    isAuth ?
      <div className="account_container">
        <div className="account_block_title">
          <h2>Личный кабинет</h2>
        </div>

        <div className="account_settings">
          <div className="account_menu">
            <ul className="account_list">
              {listMenu.map((item, index: number) => {
                return (
                  <li className="account_list_item" key={item.id}>
                    <img src={item.img} alt={`img${index}`}/>
                    <p>{item.text}</p>
                  </li>
                )
              })}   
              <li className="account_list_item">
                <img src={account_7} alt={'account_7'}/>
                <button className="account_btn_exit" onClick={() => dispatch(removeUser())}
                >
                  Выйти
                </button>
              </li>      
            </ul>
          </div>

          <div className="account_content">

            <div className="account_content_name_avatar">
              <img src={User} alt={'User'}/>
              <h3>Здравствуй, {email}</h3>
            </div>

            <div className="account_content_line"/>

            <div className="account_content_main_settings">
              <p>Основные данные</p>

            <div className="account_blocks_main_inputs">

              <div className="account_main_setting_one">
                <div className="account_form_label">
                  <label className="form_label">
                    <span className="form_text">
                      Имя
                    </span>
                    <input 
                      className='form_input width_input_account'
                      type={'text'} 
                      value={firstName} 
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </label>
                </div>
                
                <div className="account_form_label">
                  <label className="form_label">
                    <span className="form_text">
                      Отчество
                    </span>
                    <input 
                      className='form_input width_input_account'
                      type={'text'} 
                      value={lastName} 
                      onChange={e => setLastName(e.target.value)}
                    />
                  </label>
                </div>

                <div className="account_form_label">
                  <label className="form_label">
                    <span className="form_text">
                      Город
                    </span>
                    <input 
                      className='form_input width_input_account'
                      type={'text'} 
                      value={city} 
                      onChange={e => setCity(e.target.value)}
                    />
                  </label>
                </div>
              </div>

              <div className="account_main_setting_two">
                <div className="account_form_label">
                  <label className="form_label">
                    <span className="form_text">
                    Фамилия
                    </span>
                    <input 
                      className='form_input width_input_account'
                      type={'text'} 
                      value={middleName} 
                      onChange={e => setMiddleName(e.target.value)}
                    />
                  </label>
                </div>
                
                <div className="account_form_label">
                  <label className="form_label">
                    <span className="form_text">
                      Страна
                    </span>
                    <input 
                      className='form_input width_input_account'
                      type={'text'} 
                      value={county} 
                      onChange={e => setCountry(e.target.value)}
                    />
                  </label>
                </div>

                <div className="account_form_label">
                  <label className="form_label">
                    <span className="form_text">
                      Мобильный телефон
                    </span>
                    <input 
                      className='form_input width_input_account'
                      type={'text'} 
                      value={phone} 
                      onChange={e => setPhone(e.target.value)}
                    />
                  </label>
                </div>
              </div>

            </div>
           
            </div>

            <div className="account_content_change_password">
              <p>Пароль</p>

              <div className="account_blocks_main_inputs">
                <div className="account_form_label">
                    <label className="form_label">
                      <span className="form_text">
                        Новый пароль
                      </span>
                      <input 
                        className='form_input width_input_account'
                        type={'password'} 
                        value={newPassword} 
                        onChange={e => setNewPassword(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="account_form_label">
                    <label className="form_label">
                      <span className="form_text">
                        Подтверждение пароля
                      </span>
                      <input 
                        className='form_input width_input_account'
                        type={'password'} 
                        value={checkPassword} 
                        onChange={e => setCheckPassword(e.target.value)}
                      />
                    </label>
                  </div>
              </div>
   
            </div>

            <div className="account_block_btn_save">
              <button className="account_btn_save">
                Сохранить
              </button>
            </div>
          </div>

        </div>
      </div>
    : 
      <Navigate to="/"/>
  )
};
