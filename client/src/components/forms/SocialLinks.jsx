import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { Label } from '@radix-ui/react-label'
import React, { useContext } from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const SocialLinks = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setResumeInfo({
            ...resumeInfo,
            [name]: value
        })
    }

    return (
        <div>
            <h1 className='text-xl font-semibold'>Social Links</h1>
            <p className='text-lg'>Setup your online presence details</p>
            <hr className='mt-2 bg-gray-300 h-[2px]' />

            <form className='mt-5 grid grid-cols-2 gap-2'>
                <div className='col-span-2 flex gap-2 items-center'>
                    <Label htmlFor='linkedin'>LinkedIn</Label>
                    <Input className="mt-1" name="linkedin" id="linkedin" value={resumeInfo.linkedin} onChange={handleInputChange} />
                </div>

                <div className='col-span-2 flex gap-2 items-center'>
                    <Label htmlFor='github'>Github</Label>
                    <Input className="mt-1" name="github" id="github" value={resumeInfo.github} onChange={handleInputChange} />
                </div>

                <div className='col-span-2 flex gap-2 items-center'>
                    <Label htmlFor='portfolio'>Portfolio</Label>
                    <Input className="mt-1" name="portfolio" id="portfolio" value={resumeInfo.portfolio} onChange={handleInputChange} />
                </div>

                <div className='col-span-2 flex gap-2 items-center'>
                    <Label htmlFor='leetcode'>LeetCode</Label>
                    <Input className="mt-1" name="leetcode" id="leetcode" value={resumeInfo.leetcode} onChange={handleInputChange} />
                </div>
            </form>
        </div>

    )
}

export default SocialLinks