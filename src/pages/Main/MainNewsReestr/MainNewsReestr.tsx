import React from 'react';
import { BlockImg } from '../../../components/BlockImg/BlockImg';
import './MainNewsReestr.css';


export const MainNewsReestr = () => {
  return (
    <div className="MainNewsReestr_container">

      <div className="MainNewsReestr_block_title">
        <h2>Новости реестра</h2>
      </div>

      <div className="MainNewsReestr_block_img">
        <BlockImg/>
      </div>

      <div className="MainNewsReestr_block_btn_show_all">
        <button className="MainNewsReestr_btn_show_all">
          Показать все
        </button>
      </div>
    </div>
  );
};

