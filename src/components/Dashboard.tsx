
import { useUserContext } from "@/context/user-context";

const Dashboard = () => {
  const user = useUserContext;
  return (
    <div className="bg-orange-100">
      <h3>The user is: {user.name}</h3>
    </div>
  );
};

export default Dashboard;
