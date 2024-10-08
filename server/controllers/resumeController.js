const { Resume } = require("../db");

async function createResume(req, res) {
    const { resumeTitle, userEmail } = req.body;

    if (!resumeTitle || !userEmail) {
        return res.status(400).json({
            message: "Please provide resume title and user email",
            success: false
        });
    }

    const resume = await Resume.create({
        resumeTitle,
        createdByEamil: userEmail
    });
    res.status(200).json({
        resumeId: resume._id,
        message: "Resume created successfully",
        success: true
    });
}

async function getResumes(req, res) {
    const { userEmail } = req.body;

    if (!userEmail) {
        return res.status(400).json({
            message: "Please provide user email",
            success: false
        });
    }

    const resumes = await Resume.find({ createdByEamil: userEmail });
    res.status(200).json({
        resumes,
        success: true
    });
}

async function updateResume(req, res) {
    const { resumeId } = req.params;
    const { resume } = req.body;

    if (!resumeId || !resume) {
        return res.status(400).json({
            message: "Please provide resume id and resume data",
            success: false
        });
    }

    await Resume.findByIdAndUpdate(
        resumeId,
        { $set: resume },
        { new: true, runValidators: true }
    );

    res.status(200).json({
        message: "Resume updated successfully",
        success: true
    });
}

async function getResumeById(req, res) {
    const { resumeId } = req.params;

    if (!resumeId) {
        return res.status(400).json({
            message: "Please provide resume id",
            success: false
        });
    }

    const resume = await Resume.findById(resumeId);
    res.status(200).json({
        resume,
        success: true
    });
}

async function deleteResumeById(req, res) {
    const { resumeId } = req.params;

    if (!resumeId) {
        return res.status(400).json({
            message: "Please provide resume id",
            success: false
        });
    }

    const deletedResume = await Resume.findByIdAndDelete(resumeId);
    if (!deletedResume) {
        return res.status(404).json({
            message: "Resume not found",
            success: false
        });
    }

    res.status(200).json({
        message: "Resume deleted successfully",
        success: true
    });
}

module.exports = { createResume, getResumes, updateResume, getResumeById, deleteResumeById }