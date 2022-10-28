//React Includes
import React from 'react';
import { useState } from 'react';

//
import Box from './Box'

//Stylesheets
import './stylesheets/boxstyle.css'
import './stylesheets/buttonstyle.css'

function Task({key, id, title, deleteEvent, children})
{
    const [isCompleted, setIsCompleted] = useState(false);
    const [isIncomplete, setIsIncomplete] = useState(false);

    function complete()
    {
        setIsCompleted(true);
        setIsIncomplete(false);
    }

    function incomplete()
    {
        setIsCompleted(false);
        setIsIncomplete(true);
    }

    function def()
    {
        setIsCompleted(false);
        setIsIncomplete(false);
    }

    return (
        <Box title={title} color={isCompleted ? "green" : isIncomplete ? "red" : "gray"}>  
            <p>
                {children}
            </p>
            
            <div style={{marginBottom: "2.5%"}}>
                <div style={{float: "left", marginBottom: "5%", marginTop: "0%"}}>
                    { isCompleted ? "Completed" : isIncomplete ? "Incomplete" : "Pending Update" }
                </div>

                <div style={{float:"right", marginBottom:"5%", marginTop: "0%"}}>
                    <button onClick={()=>deleteEvent(id)} className="delbutton"> Delete </button>
                    <button onClick={def} className="button"> Reset </button>
                    <button onClick={complete} className="button"> Mark Complete </button>
                    <button onClick={incomplete} className="button"> Mark Incomplete </button>
                </div>
            </div>
        </Box>
    );
}

export default Task;