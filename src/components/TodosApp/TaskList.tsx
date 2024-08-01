"use client";

import { Task } from "@/app/todos/page";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import IndividualTask from "./Task";

type Props = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  removeTask: (id: string) => void
  completeTask: (id: string) => void
};

export default function TaskList({ tasks, setTasks, removeTask, completeTask }: Props) {
  const loadTasks = () => {
    //@ts-ignore
    const initialTasks: any = JSON.parse(localStorage.getItem("tasks"));

    if (initialTasks) {
      setTasks(initialTasks);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);


  return (
    <div style={{ margin: "4rem" }}>
      {tasks.map((task, index) => {
        return (
          <IndividualTask
            key={index}
            id={task.id}
            title={task.title}
            isCompleted={task.isCompleted}
            removeTask={removeTask}
            completeTask={completeTask}
          />
        );
      })}
    </div>
  );
}
