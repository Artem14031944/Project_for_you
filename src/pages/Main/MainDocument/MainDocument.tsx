import React from 'react';
import IconTable_1 from '../../../assets/img/Table_1.svg';
import IconTable_2 from '../../../assets/img/Table_2.svg';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './MainDocument.css';


export const MainDocument = () => {

  function createData(
    name: string, 
    calories: string, 
    fat: string, 
    carbs: string, 
    protein: string,) {
  return { name, calories, fat, carbs, protein };
};
  
const rows = [
  createData('Общие документы', 
    'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"', 
    '20.07.2021', 
    '1226', 
    'Скачать(469 Кб)',
  ),
  createData('Общие документы', 
    'Приказ №486 от 22.09.2020 Об утверждении классификатора программ для электронных вычислительных машин и баз данных', 
    '22.09.2020', 
    '468', 
    'Скачать(10.81 Мб)',
  ),
  createData('Общие документы', 
    'Административный регламент ПРИКАЗ от 21 февраля 2019 года N62', 
    '21.02.2019', 
    '62', 
    'Скачать(2.25 Мб)',

  ),
  createData('Общие документы', 
    'Постановление Правительства РФ от 20.12.2017 № 1594 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"', 
    '20.12.2017', 
    '1594', 
    'Скачать(2.07 Мб)',
  ),
  createData('Общие документы', 
    'Об утверждении правил применения классификатора программ для электронных вычислительных машин и баз данных"', 
    '31.12.2015', 
    '622', 
    'Скачать(4.69 Мб)',

  ),

];


  return (
    <div className="MainDocument_container">

      <div className="MainDocument_title">
        <h2>Документы</h2>
        <p>
          Всего документов:<span> 5</span>
        </p>
       </div>

       <div className="MainDocument_container_table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell>
                <span className="reestr_table_color_blue">
                  Категория
                </span>
              </TableCell>
              <TableCell align="left">
                <span className="reestr_table_color_blue">
                  Наименование 
                </span>
              </TableCell>
              <TableCell align="left">
                <span className="reestr_table_color_blue">
                 Дата
                </span>
              </TableCell>
              <TableCell align="left">
                <span className="reestr_table_color_blue">
                Номер
                </span>
              </TableCell>
              <TableCell align="left">
                <span className="reestr_table_color_blue">
                  <img src={IconTable_1} alt={"IconTable_1"} />
                Содержание
                </span>
              </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell size='small' align="left">{row.calories}</TableCell>
                  <TableCell size='small' align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="left">
                    <span className="reestr_table_color_blue">
                      <img src={IconTable_2} alt={"IconTable_2"} />
                      {row.protein}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
       </div>

    </div>
  )
};
