import React, { FC, useState, useRef } from 'react';
import { NavLink, useLocation  } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import GoodJob from '../../assets/img/good_write.svg';
import './Form.css';


interface SyntheticEvent {
  preventDefault(): void;
  
};

interface FromProps { 
  handleSing: (email: string, password: string) => void;
  errorEmail: boolean;
  errorPassword: boolean;
  rightEmail: boolean;
  rightPassword: boolean;
};


export const Form: FC<FromProps> = ({
  handleSing, 
  errorEmail, 
  errorPassword, 
  rightEmail, 
  rightPassword
  }) => {

  let location = useLocation();
  const label = {inputProps: {'aria-label': 'Checkbox demo'}};

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
 

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form_block_main_input">
        <div className="form_block_in_item">
          <label className="form_label">
          <span className={!errorEmail ? 
            "form_text" : 
            "form_text_error"}
            >
              {'Почта'}
          </span>
            <input 
              autoFocus
              className={!errorEmail ? 
                rightEmail ? 'form_input_right' : 'form_input'
              :
                "form_input_error"}
              type={'text'} 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              placeholder={'Введите почту'}
            />
          </label>
          {errorEmail && <span className="form_input_error_message">
            Такая почта не зарегистрорована
          </span>}
        </div>
        {rightEmail &&  <img src={GoodJob} alt="GoodJob"/>}
      </div>

      <div className="form_block_main_input">
        <div className="form_block_in_item">
          <label className="form_label">
            <span className={!errorPassword ? 
              "form_text" : 
              "form_text_error"}
              >
                {'Пароль'}
            </span>
            <input 
              className={!errorPassword ? 
                rightPassword ? 'form_input_right' : 'form_input'
              :
              "form_input_error"}
              type={'password'} 
              value={password} 
              onChange={e => setPassword(e.target.value)}
              placeholder={'Введите пароль'}
            />
          </label>  
          {errorPassword && <span className="form_input_error_message">
            Неправильный пароль
          </span>}
        </div>
        {rightPassword &&  <img src={GoodJob} alt="GoodJob"/>}    
      </div>

      <div className="form_block_check_box">
          <Checkbox {...label} defaultChecked />
          <p>Запомнить меня на этом компьютере</p>
      </div>

      <button 
        type={'submit'}
        className="form_btn_login"
        onClick={() =>  handleSing(email, password)}
      >
        Вход
      </button>

      {location.pathname === '/authorization' && 
        <div className="form_block_more_text">
          <p className="form_forget_password">
            Забыли свой пароль?
          </p>

          <p className="form_text_info">Авторизация с использованием ЕС ИФЮЛ</p>
          <p className="form_text_info">Авторизация с использованием МСИ</p>
          <p className="form_text_not_account">
            У вас нет аккаунта?<br/>
            <NavLink to="/registration">
              <span className="form_forget_password">
                Нажмите сюда чтобы создать
              </span>
            </NavLink>
          </p>
        </div>
      }
    </form>
  )
};
