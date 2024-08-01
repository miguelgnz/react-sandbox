import { Task } from "@/app/todos/page";
import { title } from "process";
import { Dispatch, FormEventHandler, SetStateAction, useState } from "react";

type Props = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  
};

export default function AddTask({ tasks, setTasks }: Props) {
  const [task, setTask] = useState<Task>({
    id: "",
    title: "",
    isCompleted: false,
  });

  const handleSubmitTask = (event: any) => {
    event.preventDefault();
    setTasks((prevState) => {
      return [...prevState, task];
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmitTask}>
        <label>Title</label>
        <input
          name="title"
          style={{ border: "1px solid" }}
          onChange={(event) => {
            setTask({
              id: Date.now().toString(),
              title: event.target.value,
              isCompleted: false,
            });
          }}
        />
        <button type="submit" style={{ border: "1px solid" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
