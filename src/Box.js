//React Includes
import React from 'react';
import useState from 'react';

//Stylesheets
import './stylesheets/boxstyle.css'
import './stylesheets/buttonstyle.css'

export default function Box( {children, title, color="gray"} )
{
    return (
            <div style={{marginBotton:"5%"}} className={color=="gray" ? "box boxgray" : color=="green" ? "box boxgreen" : color=="red" ? "box boxred" : "box boxgray"}>
                <h1>
                    {title}
                </h1>
                {children}
            </div>
    );
}