import { useUser } from "@clerk/clerk-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./common/Header";

const Home = () => {
  // const { user, isLoaded, isSignedIn } = useUser();
  // const navigate = useNavigate();

  // if (isLoaded && !isSignedIn) navigate("/signin");

  return (
    <div>
      <Header />
      Home
    </div>
  );
};

export default Home;
