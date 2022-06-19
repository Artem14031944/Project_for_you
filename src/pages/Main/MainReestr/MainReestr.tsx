import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ToggleBtn from '../../../assets/img/ToggleInTable.svg';
import FilterIcon from '../../../assets/img/Reestr_1.svg';
import PointsIcon from '../../../assets/img/Reestr_2.svg';
import './MainReestr.css';


export const MainReestr = () => {

  function createData(
      name: string, 
      calories: string, 
      fat: string, 
      carbs: string, 
      protein: string,
      link: string) {
    return { name, calories, fat, carbs, protein, link };
  };
  
  const rows = [
    createData('#1', 
      'Система управления базами данных «Ред База Данных»', 
      '02.09', 
      'Системы управления базами данных', 
      '29.01.2016',
      'Ссылка'
    ),
    createData('#2', 
      '1С:Школа.Информатика, 11 классных»', 
      '04.11', 
      'Системы управления процессами организации', 
      '29.01.2016',
      'Ссылка'
    ),
    createData('#3', 
      '1С:Школа. Русский язык, 5–6 класс. Лексикология', 
      '04.11', 
      'Информационные системы для решения специфических отраслевых задач', 
      '29.01.2016',
      'Ссылка'
    ),
    createData('#4', 
      '1С:Комплексная автоматизация 8', 
      '04.11', 
      'Системы управления процессами организации', 
      '29.01.2016',
      'Ссылка'
    ),
    createData('#5', 
      'Электронный периодический справочник "Система ГАРАНТ"', 
      '04.15', 
      'Прикладное программноеобеспечение общего назначения', 
      '20.02.2016',
      'Ссылка'
    ),
    createData('#6', 
      'Система электронного документооборота и автоматизации бизнес-процессов «Е1 Евфрат»', 
      '04.13', 
      'Информационные системы для решения специфических отраслевых задач', 
      '20.02.2016',
      'Ссылка'
    ),
    createData('#7', 
      'ABBYY Lingvo', 
      '04.07', 
      'Лингвистическое программное обеспечение', 
      '11.03.2016',
      'Ссылка'
    ),
    createData('#8', 
      '1С-Битрикс24 (Компания)', 
      '04.03', 
      'Офисные приложения', 
      '14.03.2016',
      'Ссылка'
    ),
    createData('#9', 
      '1С-Битрикс24 (Проект+)', 
      '04.03', 
      'Системы управленияпроектами, исследованиями, разработкой,проектированием и внедрением', 
      '14.03.2016',
      'Ссылка'
    ),
    createData('#10', 
      '1С-Битрикс24 (Команда)', 
      '04.03', 
      'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных', 
      '14.03.2016',
      'Ссылка'
    ),

  ];
  
 
  return (
    <div className="main_reestr">

      <div className="main_reestr_title">
        <h2>Реестры</h2>

        <div className="main_reestr_block_icons">
          <img className="main_reestr_icon_one" src={FilterIcon} alt={"FilterIcon"}/>
          <img className="main_reestr_icon_two" src={PointsIcon} alt={"PointsIcon"}/>
        </div>
  
      </div>

      <div className="main_reestr_table">
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <span className="reestr_table_color_blue">
                  <img src={ToggleBtn} alt={'ToggleBtn'}/>
                  Регистрационный номер
                </span>
              </TableCell>
              <TableCell>
                <span className="reestr_table_color_blue">
                  <img src={ToggleBtn} alt={'ToggleBtn'}/>
                  Наименование программного обеспечения
                </span>
              </TableCell>
              <TableCell align="right">
                <span className="reestr_table_color_blue">
                  Код класса
                </span>
              </TableCell>
              <TableCell align="right">
                <span className="reestr_table_color_blue">
                  Класс программного обеспечения
                </span>
              </TableCell>
              <TableCell align="right">
                <span className="reestr_table_color_blue">
                  Дата регистрации
                </span>
              </TableCell>
              <TableCell align="right">
                <span className="reestr_table_color_blue">
                  Адрес сайта
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
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">
                  <span className="reestr_table_color_blue_link">
                    {row.link}
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
