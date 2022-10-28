//React Includes
import React from 'react';
import { useState } from 'react';

//My Includes
import Head from './Head.js';
import Task from './Task.js';
import ToDoForm from './ToDoForm.js';

function App() {

  const [data, setData] = useState([]);
  const [indices, setIndices] = useState(0);
  const [keys, setKeys] = useState(0);

  function addTask(nId, nDesc, nTitle)
  {
    if(nTitle=="")
    {
      return;
    }
    if(nDesc=="")
    {
      return;
    }
    if(nId<0)
    {
      return;
    }

    const newData = data;
    newData.push(
      {
        key:keys,
        id:nId,
        title:nTitle,
        description:nDesc
      }
    );     
    
    setKeys(keys+1);
    setData(newData);
    setIndices(indices+1);
  }

  function removeTask(nId)
  {
    const newData = data.filter(index => index.id!=nId);

    setData(newData);
    setIndices(indices-1);
  }
  

  return (
    <>
    <Head />
    <ToDoForm getIndices={indices} add={addTask}/>
    
    {
      data.map( (index)=>{
        return (
          <Task key={index.key} id={index.id} title={index.title} deleteEvent={removeTask} >
            {index.description}
          </Task> 
        );
      })
    }

    </>
  );
}

export default App;
