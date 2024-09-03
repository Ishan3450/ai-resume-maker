import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { Label } from '@radix-ui/react-label';
import React, { useContext } from 'react'
import { Input } from '../ui/input';

const Skills = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const handleInputChange = (e) => {
    setResumeInfo({ ...resumeInfo, skills: { ...resumeInfo.skills, [e.target.name]: e.target.value } });
  }

  return (
    <div>
      <h1 className='text-xl font-semibold'>Skills</h1>
      <p className='text-lg'>Add skills reflecting your knowledge</p>
      <hr className='mt-2 bg-gray-300 h-[2px]' />

      <form onSubmit={e => e.preventDefault()} className='mt-3 flex flex-col gap-3'>
        {Object.entries(resumeInfo.skills).map(([key, value]) => (
          <div className='flex flex-col gap-1' key={key}>
            <Label>{key} <span className='text-sm text-gray-400'>(Enter ',' (comma) separated values)</span></Label>
            <Input name={key} value={value} onChange={handleInputChange}/>
          </div>
        ))}
      </form>
    </div>
  )
}

export default Skills