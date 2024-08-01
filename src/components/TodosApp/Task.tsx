type Props = {
  id: string;
  title: string;
  isCompleted: boolean;
  removeTask: (id: string) => void;
  completeTask: (id: string) => void;
};

export default function IndividualTask({
  id,
  title,
  isCompleted,
  removeTask,
  completeTask,
}: Props) {
  const bgColor = isCompleted ? "green" : "red";

  return (
    <div
      style={{
        border: "1px solid red",
        margin: "8px",
        borderRadius: "4px",
        backgroundColor: bgColor,
      }}
    >
      <p>{title}</p>
      <p>{`Status: ${isCompleted ? "completed" : "pending"}`}</p>
      <div
        style={{
          display: "flex",
          justifyContent: 'center',
          gap: "4px",
          margin: '4px'
        }}
      >
        <button
          style={{ border: "1px solid blue" }}
          onClick={() => {
            removeTask(id);
          }}
        >
          Delete
        </button>
        <button
          style={{ border: "1px solid blue" }}
          disabled={isCompleted}
          onClick={() => {
            completeTask(id);
          }}
        >
          Complete
        </button>
      </div>
    </div>
  );
}
