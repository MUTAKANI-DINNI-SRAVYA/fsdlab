const express=require('express');
const app=express();
app.use(express.json());
let students=[];
app.post('/student',(req,res)=>{
const student=req.body;
students.push(student);
res.send('Student added successfully');
});
app.get('/students',(req,res)=>{
res.json(students);
});
app.delete('/student/:id',(req,res)=>{
const id=Number(req.params.id);
const exists=students.some(student=>student.id==id);
if(!exists){
    return res.status(404).send('Student not found');
}
students=students.filter(student=>student.id!=id);
res.send('deleted sucessfully');

});
app.listen(3000,()=>{
    console.log("server running on port 3000")
});