import React from 'react';
import './BlockImgItems.css';


interface PropBlockImg { 
  id: number;
  text: string;
  img: string;
  icon: string;
  date: string;
  title: string;
};


export const BlockImgItems = ({
  id, 
  text, 
  img, 
  icon, 
  date, 
  title
}: PropBlockImg) => {
  return (
    <div key={id} className="BlockImgItems_container">

      <div className="BlockImgItems_block_img">
        <img src={img} alt={`img${id}`}/>
      </div>

      <div  className="BlockImgItems_block_content">
        <h3>{title}</h3>

        <div className="BlockImgItems_date">
          <img src={icon} alt={`icon${id}`}/>
          <span>{date}</span>
        </div>

        <div  className="BlockImgItems_text">
          <p>{text}</p>
        </div>

      </div>
     

    </div>
  )
};

