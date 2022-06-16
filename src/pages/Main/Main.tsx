import React from 'react';
import { MainContext } from './MainBlocks/MainContext/MainContext';
import { MainReestr } from './MainReestr/MainReestr';
import { MainNewsReestr } from './MainNewsReestr/MainNewsReestr';
import { MainDocument } from './MainDocument/MainDocument';
import { MainQuestion } from './MainQuestion/MainQuestion';
import './Main.css';


export const Main = () => {
  return (
      <>
        <MainContext/>
        <MainReestr/>
        <MainNewsReestr/>
        <MainDocument/>
        <MainQuestion/>
      </>
  )
};
