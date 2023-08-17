import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import * as style from './list_of_studente.styles.ts';
import axios from 'axios';


let first_name,lest_name,fhone_namber,email,clas = null

const AddStudent = (fech) => {

    const dict = {
        first_name:first_name, last_name:lest_name ,phon_number:fhone_namber, email:email,clas:clas
    };
    if ( hasNullValue(dict) ){
      axios.post("http://localhost:8000/api/students",dict )
      .then((response) => {
        console.log(response);
      });
        fech();
    }
    first_name = null
    lest_name = null
    fhone_namber = null
    email = null
    clas = null
  };

function hasNullValue(obj) {
    for (const key in obj) {
      if (obj[key] === null ){
        return false; 
      }
    }
    return true; 
}

function StudentPopup({ fech}) {

  return (
    <Popup trigger= {<button>add student</button> }  >
      {close => ( 
       <style.StudenetTopic1>
        <div >
            <style.ButtonsContainerclose>
             <button  onClick={close}>
                 x
             </button>
            </style.ButtonsContainerclose>
            <h4 >Add Student</h4>
            <div >
                <style.Input>
                    <input type="text" placeholder="First Name" onChange={(e) => (first_name = e.target.value)} />
                    <input type="text" placeholder="Last Name"  onChange={(e) => (lest_name = e.target.value)}/>
                    <input type="text" placeholder="Fhoun Number" onChange={(e) => (fhone_namber = e.target.value)} />
                    <input type="text" placeholder="Email" onChange={(e) => (email = e.target.value)} />
                    <input type="text" placeholder="Class"  onChange={(e) => (clas = e.target.value)}/>
                </style.Input>
            </div>
            <div >
             <style.ButtonsContainer1>
              <button  onClick={() => {AddStudent(fech);close()}} >
                    Save
              </button>
             </style.ButtonsContainer1>
            </div>
        </div>
       </style.StudenetTopic1>
      )}
    </Popup>
  );
}

export default StudentPopup;
