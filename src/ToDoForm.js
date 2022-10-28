//React Includes
import React from 'react';

//My Includes
import Box from './Box'

//Stylesheets
import './stylesheets/boxstyle.css'
import './stylesheets/buttonstyle.css'

function ToDoForm( {getIndices, add} )
{
    function parseAdd()
    {
        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        //var id = 0;
        let id = getIndices + 1;

        add(id, description, title);
        console.log({id, description, title});
    }

    return (
        <Box title={"To-Do List:"}>
            {getIndices<1 ? <h2>Add some tasks to get started!</h2> : null}
            <form style={{marginBottom:"2.5%"}}>         
                    <label for="title">Task:</label>
                    <input className="button" style={{width:"15%", paddingLeft:"4%"}} type="text" id="title" name="title" />

                    <label for="description">Description:</label>
                    <input className="button" style={{width:"60%"}} type="text" id="description" name="description" />

                    <input onClick={parseAdd} className="button" style={{marginLeft:"5%",width:"5%"}} type="button" value="Add" />
                </form>
                <h3>
                    {getIndices} {getIndices!=1 ? "tasks" : "task"} remaining.
                </h3>

                
        </Box>
    );
}

export default ToDoForm