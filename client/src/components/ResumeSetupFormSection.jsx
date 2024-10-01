import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext, useState } from 'react'
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight, CloudUpload, Loader2 } from 'lucide-react';
import PersonalDetails from './forms/PersonalDetails';
import Summary from './forms/Summary';
import Skills from './forms/Skills';
import ProfessionalExperience from './forms/ProfessionalExperience';
import Projects from './forms/Projects';
import Education from './forms/Education';
import SocialLinks from './forms/SocialLinks';
import GlobalApi from '../../service/GlobalApi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ResumeSetupFormSection = () => {
    const [activePageIndex, setActivePageIndex] = useState(1);
    const { resumeInfo } = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function saveResume() {
        try {
            setLoading(true);
            const response = await GlobalApi.UpdateUserResumeDetails(resumeInfo?._id, { resume: resumeInfo });

            if (response?.data?.success) {
                toast.success(response.data.message);
                navigate(`/dashboard/resume/${resumeInfo?._id}/view`);
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='pl-1 pr-3 pt-2 min-w-[40%]'>
            <div className='flex justify-between items-center mb-4'>
                <div className='border border-1 hover:bg-slate-100 py-1 px-3 rounded-lg'>
                    {resumeInfo?.resumeTitle}
                </div>
                <div className='flex gap-2'>
                    {activePageIndex > 1 && <Button onClick={() => setActivePageIndex(prev => prev - 1)} variant="outline" ><ArrowLeft className='text-gray-700' /></Button>}
                    {activePageIndex <= 6 && <Button className="flex items-center gap-2" onClick={() => setActivePageIndex(prev => prev + 1)}>Next <ArrowRight className='text-white w-5 h-5' /></Button>}
                    {activePageIndex === 7 &&
                        <Button className="flex items-center gap-2 bg-green-500 hover:bg-green-600" onClick={saveResume}>
                            {loading ? (<span className='flex gap-1'>Saving <Loader2 className='text-white w-5 h-5 animate-spin' /></span>) : (<span className='flex gap-1'>Finish <CloudUpload className='text-white w-5 h-5' /></span>)}
                        </Button>}
                </div>
            </div>

            {/* Personal Details */}
            {activePageIndex === 1 && <PersonalDetails />}

            {/* Social Links */}
            {activePageIndex === 2 && <SocialLinks />}

            {/* Summary */}
            {activePageIndex === 3 && <Summary />}

            {/* Skills */}
            {activePageIndex === 4 && <Skills />}

            {/* Professional Experience */}
            {activePageIndex === 5 && <ProfessionalExperience />}

            {/* Projects */}
            {activePageIndex === 6 && <Projects />}

            {/* Educational background */}
            {activePageIndex === 7 && <Education />}

        </div>
    )
}

export default ResumeSetupFormSection;