const { Router } = require("express");
const { createResume, getResumes, updateResume, getResumeById, deleteResumeById } = require("../controllers/resumeController");

const resumeRouter = Router();

resumeRouter.post("/createResume", createResume);
resumeRouter.post("/getResumes", getResumes);
resumeRouter.put("/:resumeId/update", updateResume);
resumeRouter.get("/:resumeId/get", getResumeById);
resumeRouter.post("/:resumeId/delete", deleteResumeById);

module.exports = resumeRouter;