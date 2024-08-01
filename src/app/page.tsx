"use client";
import Dashboard from "@/components/Dashboard";
import { UserContext } from "@/context/user-context";
import { useState } from "react";

export default function Home() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <UserContext.Provider
        value={{
          name: "Gnz",
          isNew: true,
        }}
      >
        <h1>Hey there from here</h1>
        <Dashboard />
      </UserContext.Provider>
    </>
  );
}
