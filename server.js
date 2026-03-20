const express = require("express")
const taskRouter = require("./Route/taskRoute")
const connectDB = require("./mongodb/dbconnection")
const cors = require("cors")
const authRouter = require("./Route/authRoute")

//load enivornment variable
require('dotenv').config()

//connect to database
connectDB()

//intiallze the app
const server = express()


//middleware
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended:true}))

//routes
server.use('/api', taskRouter)
server.use('/api', authRouter)


// // Default Route (Health Check)
// server.get("/", (req, res) => {
//   res.send("Task Management API is running...")
// });


// // Handle 404 Errors
// server.use((req, res) => {
//   res.status(404).json({ message: "Route not found" })
// })

// // Global Error Handler (optional but good practice)
// server.use((err, req, res, next) => {
//   console.error(err.stack)
//   res.status(500).json({ message: "Server error" })
// })

// Start Server
const port = process.env.PORT || 3000


 server.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
