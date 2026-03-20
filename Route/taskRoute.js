const { Router } = require("express");
const {createTask,getTasks,updateTask,deleteTask, toggleTask} = require("../controller/taskController");
const auth = require("../middleware/authMiddleware");



const taskRouter = Router()


taskRouter.post("/task", auth,createTask)
taskRouter.get("/task", auth, getTasks)
taskRouter.put("/task/:id", auth,updateTask)
taskRouter.delete("/task/:id",auth,deleteTask)
taskRouter.patch("/task/:id/toggle", auth, toggleTask)

module.exports = taskRouter