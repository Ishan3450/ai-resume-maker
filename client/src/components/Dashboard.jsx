import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./common/Header";
import { LoaderCircle, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"
import GlobalApi from "../../service/GlobalApi";
import SingleResumeCard from "./SingleResumeCard";

const Dashboard = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();
  if (!isLoaded && !isSignedIn) navigate("/signin");

  const [isOpen, setOpen] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [userResumes, setUserResumes] = useState([]);

  const createResume = async () => {
    try {
      setLoading(true);
      const response = await GlobalApi.CreateNewResume({
        data: {
          resumeTitle,
          username: user?.fullName,
          userEmail: user?.primaryEmailAddress?.emailAddress,
        }
      });

      if (response?.data?.data) {
        navigate(`/dashboard/resume/${response.data.data.id}/edit`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }

  useEffect(() => {
    const fetchUserResumes = async () => {
      const response = await GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress);

      if (response?.data) {
        setUserResumes(response.data.data);
      }
    }
    fetchUserResumes();
  }, [user]);

  return (
    <div className="h-full">
      <Header />
      <div className="h-full">
        <h1 className="text-2xl font-semibold">My Resume</h1>
        <div className="text-lg">
          Start creating your resumes with the help of
          <span className="text-[#20B2AA] font-bold"> AI.</span>
        </div>

        <div className="h-full mt-7 grid grid-cols-5 gap-5">
          <div className="bg-gray-200 flex items-center justify-center aspect-square border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:bg-gray-300 transition-all duration-150 hover:shadow-xl" onClick={() => setOpen(true)}>
            <Plus className="text-gray-400" />
          </div>

          {userResumes.map((resume, index) => <SingleResumeCard resume={resume} key={index} />)}
        </div>
        <Dialog open={isOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create new resume</DialogTitle>
              <DialogDescription className="flex flex-col gap-5">
                <div>Add a title for your new resume</div>
                <Input
                  value={resumeTitle}
                  onChange={(e) => setResumeTitle(e.target.value)}
                  className="text-black"
                  placeholder="Eg. Fullstack developer resume" />
                <div className="flex gap-2 justify-end">
                  <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                  <Button
                    disabled={!resumeTitle || loading}
                    onClick={createResume}>
                    {
                      !loading ? "Create" : <div className="flex gap-2"><LoaderCircle className="animate-spin" /> Creating your resume...</div>
                    }
                  </Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Dashboard;
