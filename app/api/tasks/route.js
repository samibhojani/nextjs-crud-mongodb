import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/tasks";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description } = await  request.json();
    await connectMongoDB();
    await Task.create({title, description})  ;
    return NextResponse.json({message: "Task Created"}, {status: 201});
}