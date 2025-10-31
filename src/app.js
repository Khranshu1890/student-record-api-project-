const express=require('express')
const connectDB=require('./config/database.js')
const Student=require('./models/Student.js')




const app=express()
app.use(express.json());

app.get('/students',async(req,res)=>{
    try{
    const allstudents =await Student.find({});
    res.send(allstudents);
  }
  catch(err){
    res.status(400).send('Error in connecting to database')
  }
})

app.post('/students',async(req,res)=>{
    try{
        const {name,course,age,city}=req.body;
        const student = new Student({
            name,
            course,
            age,
            city
        });
        await student.save();
        res.send("User created successfully");
    }
    catch(err){
        res.status(500).send("Error"+err);
    }
})

app.put('/students/:id',async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    try {
        const ALLOWED_UPDATES = [
          "name",
          "course",
          "age",
          "city"
        ];

      const isUpdateAllowed = Object.keys(data).every((k) => ALLOWED_UPDATES.includes(k));

      if (!isUpdateAllowed) {
          throw new Error("Update Not Allowed")
      }
        const user = await Student.findByIdAndUpdate({ _id: userId }, data, { returnDocument: "before" });
        res.send("User updated successfully")
        

    } catch (err) {
        res.status(400).send(err)
    }

})

app.delete('/students/:id',async(req,res)=>{
    const userId = req.params.id;

    try {
        const students = await Student.findByIdAndDelete(userId);
        res.send("User deleted Successfully")

    } catch (err) {
        res.status(400).send("Something went wrong")
    }
})


connectDB().then(()=>{
    console.log("Database connected successfully")
    app.listen(3000,()=>{
        console.log('App is running on the server')
        })
})
.catch((err)=>{
    console.log("Error in connecting to a database"+err)
})


