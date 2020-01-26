import React from 'react';
import {ColorConsumer} from '../contexts/color';

const colors=['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
const SelectColors=()=>{
    return(
        <div>
            <h2>Choose Color</h2>
            <ColorConsumer>
            {({action})=>(
            <div style={{display : 'flex'}}>
                {colors.map(color=>(
                    <div key={color} 
                        style={{background: color,
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer'}}
                        onClick={()=> action.setColor(color)} //mouse left click 
                        onContextMenu={e=>{ //mouse right click
                            e.preventDefault(); //ignore mouse right menu
                            action.setSubColor(color);
                        }}>              
                    </div>
                ))}
            </div>
            )}
            </ColorConsumer>
            <hr />
        </div>
    );
};
export default SelectColors;