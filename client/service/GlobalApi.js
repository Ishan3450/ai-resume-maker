import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${API_KEY}`
    }
})

const CreateNewResume = (data) => axiosClient.post("/resumes/createResume", data);
const GetUserResumes = (userEmail) => axiosClient.post(`/resumes/getResumes`, { userEmail });
const UpdateUserResumeDetails = (id, data) => axiosClient.put(`/resumes/${id}/update`, data);
const GetResumeById = (id) => axiosClient.get(`/resumes/${id}/get`);
const DeleteResumeById = (id) => axiosClient.post(`/resumes/${id}/delete`);

export default {
    CreateNewResume,
    GetUserResumes,
    UpdateUserResumeDetails,
    GetResumeById,
    DeleteResumeById
}