Goal: Create an API to manage student data.
 Requirements:

Connect Express with MongoDB using Mongoose.


Schema: { name, course, age, city }

PORTS:3000

Routes:


GET /students → fetch all students


POST /students → add new student


PUT /students/:id → update student info


DELETE /students/:id → delete student


Add basic validation (name and course required).


Ways to use: 
Install all dependencies
make .env file and add connection string of mongoDB there in MONGO_URI variables
Now enter : "npm run dev" 
