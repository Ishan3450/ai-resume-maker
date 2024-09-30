const { Router } = require("express");
const { createResume, getResumes, updateResume } = require("../controllers/resumeController");

const resumeRouter = Router();

resumeRouter.post("/createResume", createResume);
resumeRouter.get("/getResumes", getResumes);
resumeRouter.put("/:resumeId/update", updateResume);

module.exports = resumeRouter;