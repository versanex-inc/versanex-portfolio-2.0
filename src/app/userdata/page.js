"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const UserData = () => {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return <div>
        <Image src={session?.user?.image} width={60} height={60} alt="user"/>
        <p>Name : {session?.user?.name}</p>
        <p>Email : {session?.user?.email}</p>
    </div>;
  } else {
    return <div>Please login first</div>;
  }
};

export default UserData;
