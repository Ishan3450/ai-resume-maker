import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { ContactIcon, Phone } from 'lucide-react';
import React, { useContext } from 'react'

const ResumeSetupPreviewSection = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    return (
        <div className='w-[60%] py-5 px-8 border flex flex-col gap-6 border-t-8 max-h-[80vh] overflow-y-scroll h-full'>
            {/* Personal Details */}
            <div>
                <h1 className='font-semibold text-3xl'>{resumeInfo?.firstName} {resumeInfo?.lastName}</h1>
                <div className='text-gray-500 text-lg'>{resumeInfo?.address}</div>
                
                <div className='mt-1 flex gap-1 items-center'>
                    <div className='flex items-center gap-1'><Phone className='w-4 h-4' /> {resumeInfo?.phone} |</div>
                    <div> {resumeInfo?.email}</div>
                    {resumeInfo?.linkedin && <a href={resumeInfo.linkedin} target='_blank'>| <span className='underline text-blue-400'>LinkedIn</span></a>}
                    {resumeInfo?.github && <a href={resumeInfo.github} target='_blank'>| <span className='underline text-blue-400'>Github</span></a>}
                    {resumeInfo?.portfolio && <a href={resumeInfo.portfolio} target='_blank'>| <span className='underline text-blue-400'>Portfolio</span></a>}
                    {resumeInfo?.leetcode && <a href={resumeInfo.leetcode} target='_blank'>| <span className='underline text-blue-400'>LeetCode</span></a>}
                </div>
            </div>

            {/* Summary */}
            <div>
                <h2 className='text-2xl font-semibold'>Summary</h2>
                <div className='mt-1 text-justify'>{resumeInfo?.summary}</div>
            </div>

            {/* Skills */}
            <div>
                <h2 className='text-2xl font-semibold'>Technical Skills</h2>
                <ul className='list-disc ml-14 mt-2'>
                    {Object.entries(resumeInfo?.skills).map(([key, value]) => (
                        <li key={key}>
                            <span className='font-semibold'>{key}</span>: {value}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Professional Experience */}
            <div>
                <h2 className='text-2xl font-semibold'>Professional Experience</h2>
                {
                    resumeInfo?.experience.map(work => (
                        <div>
                            <div className='flex gap-2 items-baseline text-sm mt-2'>
                                <h3 className='text-lg font-medium'>{work.title}</h3>
                                -
                                <div className='text-gray-500'>{work.companyName} |</div>
                                <div className='text-gray-500'>{work?.startDate} - {work?.endDate ? work.endDate : "Present"}</div>
                            </div>

                            {/*: work summary will be edited later */}
                            <div className='mt-1 ml-14 text-justify'>
                                {work?.workSummary}
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Projects */}
            <div>
                <h2 className='text-2xl font-semibold'>Projects</h2>

                {resumeInfo?.projects.map(project => (
                    <div className='mt-2'>
                        <div className='flex gap-2 items-baseline'>
                            <h3 className='text-lg font-medium'>{project.name}</h3>
                            -
                            <a href={project?.github} className='text-blue-400 underline font-semibold' target='_blank'>Link</a>
                        </div>

                        <div className='flex gap-2'>
                            <div className='font-semibold'>Tech Stack: </div>
                            <div>{project.techStack}</div>
                        </div>

                        <ul className='list-disc ml-16 mt-1 text-justify'>
                            <li>{project.description}</li>
                        </ul>
                    </div>
                ))}
            </div>

            {/* Educational background */}
            <div>
                <h2 className='text-2xl font-semibold'>Education</h2>

                <div className='mt-2 flex flex-col gap-1'>
                    {resumeInfo?.education.map(info => (
                        <div className='flex gap-1'>
                            <span className='font-semibold'>{info.universityName}, </span>
                            <span className='text-gray-600 flex gap-1'>
                                <span>{info.degree} in {info.major}</span>
                                <span>|</span>
                                <span>Grade: {info.grade}</span>
                                <span>|</span>
                                <span>{info.startDate} to {info.endDate}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ResumeSetupPreviewSection