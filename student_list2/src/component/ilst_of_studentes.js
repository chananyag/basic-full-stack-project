import * as style from "./list_of_studente.styles.ts";
import 'reactjs-popup/dist/index.css';
import StudentPopup from './StudentPopup';
import { useState, useEffect } from "react";
import StudentPopupadit from "./adit.student.js"
import axios from 'axios';





function Students () {

  
  const [studentlist,setstudentlist] = useState([])
  
    const fetchStudents = async () => {
      axios.get('http://localhost:8000/api/students')
      .then(response => {
        setstudentlist(response.data);
        console.log(response.config)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    };

    useEffect(() => {
      fetchStudents();
    }, []);


    const deleteStudent = async (studentId) => {
      try {
        await axios.delete(`http://localhost:8000/api/students/${studentId}`);
        
      } catch (error) {
          console.error(error);
      }
     
        fetchStudents();
    };

     
    return (
    <style.HomePage>
      <div > 
        <style.ButtonsContainer>
          <StudentPopup   fech = {fetchStudents} />
        </style.ButtonsContainer>
      
        <style.StudenetTopic>    
          <div > First name     </div>
          <div > Lest name      </div>
          <div > Phone number   </div>
          <div > Email          </div>
          <div > Class          </div>
          <div >    {studentlist.length}       </div>
          
        </style.StudenetTopic  >

        {studentlist?.map((item) => (
          <style.StudenetLIst >  
            <div> {item.first_name}</div> 
            <div> {item.last_name}</div> 
            <div> {item.phon_number}</div> 
            <div>{item.email}</div> 
            <div>{item.clas}</div>
            <div><button onClick={() => deleteStudent(item.id)}>delete</button>
            <StudentPopupadit  fech = {fetchStudents} item = {item} /></div>
            
          </style.StudenetLIst  > 
        ))}
      </div>
      </style.HomePage>
    );
  }

export default Students
  