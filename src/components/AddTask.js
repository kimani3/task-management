import { useState } from "react";
import Swal from "sweetalert2";


function AddTask ({onSave}){
    const [ text, setText] = useState('');
    const [ day, setDay] = useState('');

    const onSubmit = (e)=>{
        e.preventDefault();
        if(!text && !day){
            Swal.fire({
                icon:'error',
                title: 'Ooops...',
                text: 'Fill in your task and date or close the form!'
            })
        } else if (!text && day){
            Swal.fire({
                icon: 'error',
                title:'Ooops...',
                text: 'Fill  in your task '
            })
        }else if (text && !day){
            Swal.fire({
                icon: 'error',
                title:'Ooops...',
                text: 'Fill in your day'
            })

        }else {
            onSave({text, day});
        }
        setText('');
        setDay('');

    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
         <div>
            <input 
                type= "text"
                placeholder="Add Task "
                value={text}
                onChange = {(e) =>setText( e.target.value)}
            />
        </div>
        <div>
            <input 
                type= "text"
                placeholder=" add day & time"
                value={day}
                onChange = {(e) =>setDay( e.target.value)}
            />
        </div>
            <input 
                type= "submit"
                className="btn btn-block"
                value="save Task"
            />
        </form>
    )
}
export default AddTask;