const express = require('express');
const admin = require('firebase-admin');
const keys = require('./key.json');
const app = express();
const cors = require('cors'); 


admin.initializeApp({credential: admin.credential.cert(keys)})
const db= admin.firestore();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(express.urlencoded({extended:true}))

app.get('/message/a', (req, res) => {
    res.json({ message: "stop to worry" ,
    sos:"sos for the ysraly democratya"});
});

app.get('/api/students', async (req, res) => {
try {
    const querySnapshot = db.collection( "student");
    const response = await querySnapshot.get();
    const studentsData = [];
    response.forEach((doc) => {
      studentsData.push({ id: doc.id, ...doc.data() });
    });
    res.send(studentsData)
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
}
});


app.post('/api/students', async (req, res) => {
    try {
        const data = req.body; 
        const docRef = await db.collection('student').add(data);
        res.status(201).json({ id: docRef.id, ...data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding data' });
    }
});

app.delete('/api/students/:studentId', async (req, res) => {
    try {
        const studentId = req.params.studentId;
        await db.collection('student').doc(studentId).delete();
        res.status(204).send(); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting data' });
    }
});

app.put('/api/students/:studentId', async (req, res) => {
    try {
        const studentId = req.params.studentId;
        const newData = req.body;
        await db.collection('student').doc(studentId).update(newData);
        res.status(204).send(); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating data' });
    }
});


app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });
    