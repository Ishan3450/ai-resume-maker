import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ResumeSetupFormSection from './ResumeSetupFormSection';
import ResumeSetupPreviewSection from './ResumeSetupPreviewSection';
import Header from './common/Header';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';

const SetupResume = () => {
    const { resumeId } = useParams();
    const [resumeInfo, setResumeInfo] = useState(dummy);

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