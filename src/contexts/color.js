import React,{createContext,useState} from 'react';

const ColorContext = createContext({
    state: {color: 'black', subcolor: 'red'},
    action: {
        setColor: ()=>{},
        setSubColor: ()=>{}
    }
});

const ColorProvider = ({children})=>{
    const [color,setColor] =useState('black');
    const [subcolor, setSubColor] = useState('red');

    const value = {
        state: {color, subcolor},
        action: {setColor, setSubColor}
    };
    return(
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    ); 
};

const ColorConsumer = ColorContext.Consumer;
export {ColorConsumer, ColorProvider};

export default ColorContext;