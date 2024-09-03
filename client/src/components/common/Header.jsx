import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="my-5 flex justify-between items-center">
      <img src="/logo.svg" alt="" width={150} />

      {isSignedIn ? (
        <div className="flex gap-5 items-center">
          <Link to={"/dashboard"}><Button variant="outline">Dashboard</Button></Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/signin"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
