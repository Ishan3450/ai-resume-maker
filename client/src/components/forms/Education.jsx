import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from '@radix-ui/react-label'
import toast from 'react-hot-toast'
import { Button } from '../ui/button'
import { MinusIcon, Plus } from 'lucide-react'
import { Input } from '../ui/input'

const formFields = {
  universityName: '',
  startDate: '',
  endDate: '',
  degree: '',
  major: '',
  grade: ''
}

const Education = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [educationList, setEducationList] = useState(resumeInfo?.education);

  const handleInputChange = (e, index) => {
    const entries = [...educationList];
    entries[index][e.target.name] = e.target.value;
    setEducationList(entries);
  }

  const addEducation = () => {
    setEducationList([...educationList, formFields]);
    toast.success("New education added")
  }

  const removeEducation = () => {
    setEducationList(prev => prev.slice(0, -1));
    toast.success("Last education removed");
  }

  useEffect(() => {
    setResumeInfo({ ...resumeInfo, education: educationList });
  }, [educationList])

  return (
    <div>
      <h1 className='text-xl font-semibold'>Education</h1>
      <p className='text-lg'>Add your education details</p>
      <hr className='mt-2 bg-gray-300 h-[2px]' />

      <div className='mt-2'>
        <Accordion type="single" collapsible>
          {educationList.map((education, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border my-1 rounded">
              <AccordionTrigger className="px-2">{education.degree} from {education.universityName}</AccordionTrigger>
              <AccordionContent>
                <form className='grid grid-cols-2 gap-2 px-2' onSubmit={e => e.preventDefault()}>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor='universityName'>University Name</Label>
                    <Input name="universityName" id="universityName" value={education.universityName} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor='degree'>Degree</Label>
                    <Input name="degree" id="degree" value={education.degree} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor="major">Major</Label>
                    <Input name="major" id="major" value={education.major} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor='grade'>Grade</Label>
                    <Input name="grade" id="grade" value={education.grade} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor='startDate'>Start date</Label>
                    <Input name="startDate" id="startDate" value={education.startDate} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor='endDate'>End Date <span className='text-xs text-gray-400'>(Leave empty if present)</span></Label>
                    <Input name="endDate" id="endDate" value={education.endDate} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                </form>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className='mt-10'>
          <div className='flex gap-2'>
            <Button size="sm" variant="secondary" className="flex gap-1" onClick={removeEducation}><MinusIcon className='text-gray-500 w-5 h-5' /> Remove</Button>
            <Button size="sm" className="flex gap-1" onClick={addEducation}><Plus className='w-5 h-5' /> Add Education</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education