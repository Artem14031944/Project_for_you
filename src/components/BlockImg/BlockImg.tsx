import React from 'react';
import img_1 from '../../assets/img/Phote.png';
import img_2 from '../../assets/img/Phote_1.png';
import img_3 from '../../assets/img/Phote_2.png';
import img_4 from '../../assets/img/Phote_3.png';
import img_5 from '../../assets/img/Phote_4.png';
import img_6 from '../../assets/img/Phote_5.png';
import icon_calendary from '../../assets/img/CalendaryBlockReestrImg.svg';
import { BlockImgItems } from '../BlockImg/BlockImgItems/BlockImgItems';


export const BlockImg = () => {

  const data = [

    {
      id:1, img: img_1, 
      text: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...', 
      icon: icon_calendary, 
      date: '30.05.2022', 
      title: 'Технические работы 30.05.2022'
    },

    {
      id:2, 
      img: img_2, 
      text: 'Обращаем внимание, что с 28.05.2022 внесены изменения в справочник "Дей...', 
      icon: 
      icon_calendary, 
      date: '28.05.2022', 
      title: 'Изменение справочника'
    },
    {
      id:3, 
      img: img_3, 
      text: 'В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться пер...', 
      icon: icon_calendary, 
      date: '26.05.2022', 
      title: 'Технические работы 26.05.2022'
  },
    {
      id:4, 
      img: img_4, 
      text: 'Лицензирование затрагивает отдельные виды деятельности в Республике Беларус...', 
      icon: icon_calendary, 
      date: '25.05.2022', 
      title: 'Лицензирование в Беларуси'
    },
    {
      id:5, 
      img: img_5, 
      text: 'Тестирование системы новостей ЕРЛ.', 
      icon: icon_calendary, 
      date: '20.05.2022',
       title: 'Тестирование системы новостей Ед...'
    },
    {
      id:6, 
      img: img_6, 
      text: 'В новой версии доступны новые функции,которые упрощают использование сервис...', 
      icon: icon_calendary, 
      date: '18.05.2022', title: 'Обновление версии реестра ПО'
    },
  ];

  return (
    <>
      {data.map((item, index: number) => {

        const {id, img, text, icon, date, title } = item;
        
        return (
          <>
            <BlockImgItems
             id={id} 
             img={img}
             text={text}
             icon={icon}
             date={date}
             title={title}
            />
          </>
        )
      })}
    </>
  )
};
