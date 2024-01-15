import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTasks = async () => {
  try{
      const res = await fetch('http://localhost:3000/api/tasks', {
        cache: "no-store",
      })

      if (!res.ok) {
        throw new Error("Failed to fetch tasks")
      }

      return res.json();

  } catch (error) {
    console.log("Error loading tasks: ", error)
  }
}

const TopicsList = async () => {

  const {tasks} = await getTasks();

  return (
    <>
      {tasks.map((t) => (
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
        </div>

        <div className="flex gap-2">
            <RemoveBtn />

            {/* editbutton */}
            <Link href={`/editTopic/${t._id }`}>
                <HiPencilAlt size={24} />
            </Link>
        </div>
      </div>
      ))}
    </>
  );
};
