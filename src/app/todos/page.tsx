"use client";

import { useEffect, useState } from "react";
import TaskList from "@/components/TodosApp/TaskList";
import AddTask from "@/components/TodosApp/AddTask";

export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export default function TodoAppPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "task1",
      isCompleted: false,
    },
    {
      id: "2",
      title: "task2",
      isCompleted: false,
    },
    {
      id: "3",
      title: "task3",
      isCompleted: false,
    },
  ]);

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id: string) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : task;
      })
    );
  };

  return (
    <div>
      <h1>TODO LIST APP</h1>
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        removeTask={removeTask}
        completeTask={completeTask}
      />
      <AddTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
