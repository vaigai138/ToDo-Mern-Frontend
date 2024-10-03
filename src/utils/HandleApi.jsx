import axios from 'axios'

const baseUrl = "https://todo-mern-backend-ankj.onrender.com"


const getAllToDo = (SetToDo)=>{
    axios.get(baseUrl).then(({data})=>{
        SetToDo(data)
    })
}

const addToDO = (text,setText,setToDo)=>{
    axios.post(`${baseUrl}/save`,{text}).then((data)=>{
        
        setText("")
        getAllToDo(setToDo)
        
    }).catch((err)=>console.log(err))
}

const updateToDo = (toDoId,text,setToDo,setText,setIsUpdate)=>{
    axios.post(`${baseUrl}/update`,{_id:toDoId,text}).then((data)=>{
        setText("")
        setIsUpdate(false)
        getAllToDo(setToDo)
    }).catch((err)=>console.log(err))
}

const deleteToDo = (_id,setToDo)=>{
    axios.post(`${baseUrl}/delete`,{_id}).then((data)=>{
        getAllToDo(setToDo)
    }).catch((err)=>console.log(err))
}

export {getAllToDo,addToDO,updateToDo,deleteToDo}