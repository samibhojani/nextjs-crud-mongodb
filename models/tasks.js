import mongoose, { Schema } from "mongoose";

const tasksSchema = new Schema(
    {
        title: String,
        description: String
    }, {
        timestamps: true,
    }
);

const Task = mongoose.models.Task || mongoose.model("Task", tasksSchema);

export default Task;