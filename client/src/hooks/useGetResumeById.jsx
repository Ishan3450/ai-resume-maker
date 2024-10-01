import { useEffect, useState } from "react";
import GlobalApi from "../../service/GlobalApi";

const useGetResumeById = (resumeId) => {
    const [resume, setResume] = useState({});

    useEffect(() => {
        async function getResumeById() {
            const response = await GlobalApi.GetResumeById(resumeId);

            if(response?.data?.success){
                setResume(response.data.resume);
            }
        }
        getResumeById();
    }, []);

    return {resume};
};

export default useGetResumeById;