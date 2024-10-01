import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResumeSetupFormSection from './ResumeSetupFormSection';
import ResumeSetupPreviewSection from './ResumeSetupPreviewSection';
import Header from './common/Header';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import useGetResumeById from '@/hooks/useGetResumeById';

const SetupResume = () => {
    const { resumeId } = useParams();
    const { resume } = useGetResumeById(resumeId);
    const [resumeInfo, setResumeInfo] = useState(resume);

    useEffect(() => {
        setResumeInfo(resume);
    }, [resume]);

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div className='overflow-hidden'>
                <Header />
                <div className='flex justify-between gap-2'>
                    <ResumeSetupFormSection />
                    <ResumeSetupPreviewSection />
                </div>
            </div>
        </ResumeInfoContext.Provider>
    )
}

export default SetupResume