import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './MainQuestion.css';

export const MainQuestion = () => {

  const Accordion = styled((props: any) => (
    <MuiAccordion children={''} disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props: any) => (
    <MuiAccordionSummary
      expandIcon={<AddOutlinedIcon sx={{ fontSize: '2rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .1)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  
    const [expanded, setExpanded] = useState('panel1');
  
    const handleChange = (panel: any) => (event: any, newExpanded: any) => {
      setExpanded(newExpanded ? panel : false);
    };


  return (
    <div className="MainQuestion_container">

      <div className="MainQuestion_wrapper">

        <div className="MainQuestion_title">
          <h2>Вопрос-ответ</h2>
        </div>
        
        <div className="MainQuestion_accordion">

          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <h4 className="MainQuestion_accordion_accordion_title">
                Для подачи заявления необходимо подготовить
              </h4>
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              <ul className="MainQuestion_accordion_list">
                <li>
                  1. Данные для авторизации в личном кабинете
                </li>
                <li> 
                  2. Квалифицированный сертификат ключа 
                    проверки электронной подписи.
                </li>
                <li>
                  3. Сведения, документы и материалы в соответствии 
                  с Методическими рекомендациями.
                </li>
                <li>
                  4. Установить специализированное ПО для подписания 
                  документов электронной подписью. Подписание 
                  производится с использованием усиленной квалифицированной 
                  (отсоединяемой) электронной подписи.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
          </Accordion>
          
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <h4 className="MainQuestion_accordion_accordion_title">
                Связь с оператором реестра
              </h4>
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              <ul className="MainQuestion_accordion_list">
                <li>
                  1. Данные для авторизации в личном кабинете
                </li>
                <li> 
                  2. Квалифицированный сертификат ключа 
                    проверки электронной подписи.
                </li>
                <li>
                  3. Сведения, документы и материалы в соответствии 
                  с Методическими рекомендациями.
                </li>
                <li>
                  4. Установить специализированное ПО для подписания 
                  документов электронной подписью. Подписание 
                  производится с использованием усиленной квалифицированной 
                  (отсоединяемой) электронной подписи.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <h4 className="MainQuestion_accordion_accordion_title">
                Как подать заявление на включение программного обеспечения
                в реестр
              </h4>
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              <ul className="MainQuestion_accordion_list">
                <li>
                  1. Данные для авторизации в личном кабинете
                </li>
                <li> 
                  2. Квалифицированный сертификат ключа 
                    проверки электронной подписи.
                </li>
                <li>
                  3. Сведения, документы и материалы в соответствии 
                  с Методическими рекомендациями.
                </li>
                <li>
                  4. Установить специализированное ПО для подписания 
                  документов электронной подписью. Подписание 
                  производится с использованием усиленной квалифицированной 
                  (отсоединяемой) электронной подписи.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <h4 className="MainQuestion_accordion_accordion_title">
                Где можно подать заявление
              </h4>
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              <ul className="MainQuestion_accordion_list">
                <li>
                  1. Данные для авторизации в личном кабинете
                </li>
                <li> 
                  2. Квалифицированный сертификат ключа 
                    проверки электронной подписи.
                </li>
                <li>
                  3. Сведения, документы и материалы в соответствии 
                  с Методическими рекомендациями.
                </li>
                <li>
                  4. Установить специализированное ПО для подписания 
                  документов электронной подписью. Подписание 
                  производится с использованием усиленной квалифицированной 
                  (отсоединяемой) электронной подписи.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <h4 className="MainQuestion_accordion_accordion_title">
                Как узнать мне причину отказа
              </h4>
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              <ul className="MainQuestion_accordion_list">
                <li>
                  1. Данные для авторизации в личном кабинете
                </li>
                <li> 
                  2. Квалифицированный сертификат ключа 
                    проверки электронной подписи.
                </li>
                <li>
                  3. Сведения, документы и материалы в соответствии 
                  с Методическими рекомендациями.
                </li>
                <li>
                  4. Установить специализированное ПО для подписания 
                  документов электронной подписью. Подписание 
                  производится с использованием усиленной квалифицированной 
                  (отсоединяемой) электронной подписи.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <h4 className="MainQuestion_accordion_accordion_title">
                Что делать, если Вам отказали
              </h4>
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              <ul className="MainQuestion_accordion_list">
                <li>
                  1. Данные для авторизации в личном кабинете
                </li>
                <li> 
                  2. Квалифицированный сертификат ключа 
                    проверки электронной подписи.
                </li>
                <li>
                  3. Сведения, документы и материалы в соответствии 
                  с Методическими рекомендациями.
                </li>
                <li>
                  4. Установить специализированное ПО для подписания 
                  документов электронной подписью. Подписание 
                  производится с использованием усиленной квалифицированной 
                  (отсоединяемой) электронной подписи.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <h4 className="MainQuestion_accordion_accordion_title">
                Изменение реестревой записи
              </h4>
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              <ul className="MainQuestion_accordion_list">
                <li>
                  1. Данные для авторизации в личном кабинете
                </li>
                <li> 
                  2. Квалифицированный сертификат ключа 
                    проверки электронной подписи.
                </li>
                <li>
                  3. Сведения, документы и материалы в соответствии 
                  с Методическими рекомендациями.
                </li>
                <li>
                  4. Установить специализированное ПО для подписания 
                  документов электронной подписью. Подписание 
                  производится с использованием усиленной квалифицированной 
                  (отсоединяемой) электронной подписи.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
          </Accordion>

        </div>

      </div> 

    </div>
  )
};
