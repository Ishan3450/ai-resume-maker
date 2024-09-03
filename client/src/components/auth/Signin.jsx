import { SignIn } from "@clerk/clerk-react";
import React from "react";

const Signin = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default Signin;
