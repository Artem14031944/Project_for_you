import React from 'react';
import BigImg from '../../../../assets/img/3d Office Work 1.png';
import './MainContext.css';

export const MainContext = () => {
  return (
    <div className="main_context_container">
      <div className="main_context_content">

        <div className="main_context_content__text">
          <h2>
            РЕЕСТР <br/>
            ПРОГРАММНОГО <br/>
            ОБЕСПЕЧЕНИЯ
          </h2>

          <p className="main_context_content__text_item">
            Единый реестр программ для электронных  <br/>
            вычислительных машин и баз данных
          </p>

          <p className="main_context_content__text_item">
            Включено ПО в реестр: <span>13 438</span>  <br/>
            Правообладателей: <span>4 272</span>
          </p>

          <div className="main_context_block_input">
            <div className="main_context_block_search">
              <button className="main_context_search_icon"/>
              <input type="text" placeholder="Искать реестр..."/>
            </div>
            <button className="main_context_btn_search">Искать</button>
          </div>
        </div>

        <div className="main_content__img">
          <img src={BigImg} alt={"BigImg"}/>
        </div>

      </div>
    </div>
  )
}

