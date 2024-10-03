import { useEffect, useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import { addToDO, deleteToDo, getAllToDo,updateToDo } from './utils/HandleApi'


function App() {

  const [toDo,setToDo] = useState([])
  const [text,setText] = useState("")
  const [isUpdate,setIsUpdate] = useState(false)
  const [toDoId,setToDoId] = useState("")

  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode=(_id,text)=>{
    setIsUpdate(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <>
      <div className="App">
        <div className="container">

          <div className="heading">
          <h1>ToDo App</h1>
          </div>

          <div className="top">

            <div className="ip">
            <input type="text"  placeholder='Add ToDos...' value={text} onChange={(e)=>setText(e.target.value)}/>
            <div className="Add" onClick={isUpdate?()=>updateToDo(toDoId,text,setToDo,setText,setIsUpdate) : ()=>addToDO(text,setText,setToDo)}>{isUpdate?"Update":"Add"}</div>
            </div>

          </div>

          <div className="list">

            {toDo.map((item)=><ToDo  key={item._id} text={item.text} 
            updateMode={()=>updateMode(item._id,item.text)}
            deleteToDo={()=>deleteToDo(item._id,setToDo)}
            />)}

             

            </div>


        </div>
      </div>
    </>
  )
}

export default App
