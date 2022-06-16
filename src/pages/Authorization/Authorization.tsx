import React, { useState } from 'react';
import ArrowToHome from '../../assets/img/ArrowLeft.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form } from '../../components/Form/Form';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { setUser } from '../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './Authorization.css';


export const Authorization = () => {

  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<boolean>(false);
  const [rightEmail, setRightEmail] = useState<boolean>(false);
  const [rightPassword, setRightPassword] = useState<boolean>(false);

  let history  = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {

      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      }));
      history('/personal_account');
    })
    .catch(err => {

      if(err.code !== 'auth/user-not-found') {
        setRightEmail(true);
      };

      if(err.code !== 'auth/wrong-password') {
        console.log('err password');
        setRightPassword(true);
      };

      if(err.code === 'auth/wrong-password') {
        console.log('err password');
        setErrorPassword(true);
      };

      if(err.code === 'auth/user-not-found') {
        console.log('err not found');
        setErrorEmail(true);
      };
    
    })
  };


  return (
    <>
      <div className="authorization_container">
        <div className="authorization_block_link">
          <NavLink to="/">
            <div className="authorization_link_go_to_home">
              <img src={ArrowToHome} alt={"ArrowToHome"}/>
              <span>Главная</span>
            </div>
          </NavLink>
        </div>
        <div className="authorization_title">
          <h2>Авторизация</h2>
        </div>
        <div className="authorization_form">
          <Form 
            handleSing={handleLogin}
            errorEmail={errorEmail}
            errorPassword={errorPassword}
            rightEmail={rightEmail}
            rightPassword={rightPassword} 
          />
        </div>
      </div>
    </>
  )
};

