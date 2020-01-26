import React from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import {ColorProvider} from './contexts/color';
import SelectColors from './components/SelectColors';

const App=()=>{
  return(
    <ColorProvider>
      <SelectColors />
      <ColorBox />
    </ColorProvider>
  );
};
export default App;
