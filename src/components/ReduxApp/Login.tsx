"use client";

import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice";
import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";

import { Button, Input } from "@nextui-org/react";

export default function Login() {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const onClickLogin = () => {
    dispatch(logIn(username));
  };
  const onClickLogout = () => {
    dispatch(logOut());
  };
  const onClickToggle = () => {
    dispatch(toggleModerator());
  };

  return (
    <div style={{width: '10rem'}}>
      <Input
      width={2}
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Button variant="bordered" onClick={onClickLogin}>
        Log In
      </Button>
      <Button onClick={onClickLogout}>Log Out</Button>
      <Button onClick={onClickToggle}>Toggle moderator</Button>
    </div>
  );
}
