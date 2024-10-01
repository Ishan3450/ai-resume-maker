import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './common/Header';
import { Button } from './ui/button';
import ResumeSetupPreviewSection from './ResumeSetupPreviewSection';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import useGetResumeById from '@/hooks/useGetResumeById';

const ViewResume = () => {
    const { resumeId } = useParams();
    const { resume } = useGetResumeById(resumeId);
    const [resumeInfo, setResumeInfo] = useState(resume);

    useEffect(() => {
        setResumeInfo(resume);
    }, [resume]);

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div id='no-print-area'>
                <Header />

                <div >
                    <div className='flex justify-between items-end'>
                        <div>
                            <div className='text-2xl font-semibold'>View Resume</div>
                            <div className='text-xl'>Your resume is ready to view.</div>
                        </div>
                        <Button onClick={() => window.print()}>Download</Button>
                    </div>
                    <hr className='my-4 bg-gray-300 h-[2px]' />
                </div>

            </div>

            <div id='print-area' className='flex justify-center'>
                <ResumeSetupPreviewSection />
            </div>
        </ResumeInfoContext.Provider>
    )
}

export default ViewResume