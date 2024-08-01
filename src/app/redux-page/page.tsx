"use client";

import Login from "@/components/ReduxApp/Login";
import { useAppSelector } from "@/redux/store";

export default function ReduxPage() {
  const username = useAppSelector((state) => {
    return state.authReducer.value.username;
  });

  const isModerator = useAppSelector((state) => {
    return state.authReducer.value.isModerator;
  });

  return (
    <div>
      <Login />
      <h1>Username: {username}</h1>
      {isModerator && <h1>User is moderator and has superpowers</h1>}
    </div>
  );
}
