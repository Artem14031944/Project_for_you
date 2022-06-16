import React, { useState } from 'react';
import ArrowToHome from '../../assets/img/ArrowLeft.svg';
import { Form } from '../../components/Form/Form';
import { setUser } from '../../store/slices/userSlice';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Registration.css';


export const Registration = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 5,
    boxShadow: 24,
    fontFamily: 'Manrope',
    p: 4,
  };

  let history  = useNavigate();
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<boolean>(false);
  const [rightEmail, setRightEmail] = useState<boolean>(false);
  const [rightPassword, setRightPassword] = useState<boolean>(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRegistration = (email: string, password: string) => {

    const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user, 'user');

        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }))
        history('/personal_account');
      })
      .catch(err => {
        console.log(err);
        setOpen(true);
      })
  };

  return (
    <>
      <div className="authorization_container">
        <div className="authorization_block_link">
          <div 
            className="authorization_link_go_to_home"
            onClick={() => history(-1)}
          >
            <img src={ArrowToHome} alt={"ArrowToHome"}/>
            <span>Назад</span>
          </div>
        </div>
        <div className="authorization_title">
          <h2>Регистрация</h2>
        </div>
        <div className="authorization_form">
          <Form 
            handleSing={handleRegistration}
            errorEmail={errorEmail}
            errorPassword={errorPassword}
            rightEmail={rightEmail}
            rightPassword={rightPassword}
          />
        </div>
      </div>

      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Такая почта уже зарегистрирована
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              По пробуте зайти
            </Typography>
            <div className ="modal_block_error_reg">
              <NavLink to="/authorization">
                <button className="modal_btn_go_to_authorization">
                  Авторизация
                </button> 
              </NavLink>
            </div>
          </Box>
        </Modal>
      </>
    </>
  )
};

