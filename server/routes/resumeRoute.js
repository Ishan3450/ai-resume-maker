const { Router } = require("express");
const { createResume, getResumes, updateResume, getResumeById } = require("../controllers/resumeController");

const resumeRouter = Router();

resumeRouter.post("/createResume", createResume);
resumeRouter.post("/getResumes", getResumes);
resumeRouter.put("/:resumeId/update", updateResume);
resumeRouter.get("/:resumeId/get", getResumeById);

module.exports = resumeRouter;