import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import * as style from './list_of_studente.styles.ts';
import axios from 'axios';

let first_name,lest_name,fhone_namber,email,clas = null




const aditStudent = (id, fech) => {
    const newData = {
        
        first_name:first_name, last_name:lest_name ,phon_number:fhone_namber, email:email,clas:clas
    };
    updateStudent(id, newData, fech)
    
  };
const updateStudent = async (id, newData, fech) => {
    try {
      await axios.put(`http://localhost:8000/api/students/${id}`, newData);
    fech(); 
    } catch (error) {
        console.error(error);
    }
    fech();
};
   

function StudentPopupadit({ fech, item}) {

  return (
    <Popup trigger= {<button>adit</button> }  >
      {close => ( 
      
        <div  >
            <style.ButtonsContainerclose>
             <button  onClick={close}>
                 x
             </button>
            </style.ButtonsContainerclose>
            <h4 >adit Student</h4>
            <div >
                <style.Input>
                    <input type="text" placeholder={item.first_name} onChange={(e) => (first_name = e.target.value)} />
                    <input type="text" placeholder={item.last_name}  onChange={(e) => (lest_name = e.target.value)}/>
                    <input type="text" placeholder={item.phon_number} onChange={(e) => (fhone_namber = e.target.value)} />
                    <input type="text" placeholder={item.email} onChange={(e) => (email = e.target.value)} />
                    <input type="text" placeholder={item.clas}  onChange={(e) => (clas = e.target.value)}/>
                </style.Input>
            </div>
            <div >
             <style.ButtonsContainer1>
              <button  onClick={() => {aditStudent(item.id, fech);close()}} >
                    Update
              </button>
             </style.ButtonsContainer1>
            </div>
        </div>
      
      )}
    </Popup>
  );
}

export default StudentPopupadit;
