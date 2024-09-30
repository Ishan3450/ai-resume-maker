import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext, useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import RichTextEditor from '../RichTextEditor';
import { Button } from '../ui/button';
import { MinusIcon, Plus } from 'lucide-react';
import toast from 'react-hot-toast';

const formFields = {
  title: '',
  companyName: '',
  city: '',
  state: '',
  startDate: '',
  endDate: '',
  workSummary: ''
}

const ProfessionalExperience = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [experienceList, setExperienceList] = useState(resumeInfo.experience);

  const handleInputChange = (e, index) => {
    const entries = [...experienceList];
    entries[index][e.target.name] = e.target.value;
    setExperienceList(entries);
  }

  const handleTextEditorChange = (e, index, name) => {
    const entries = [...experienceList];
    entries[index][name] = e.target.value;
    setExperienceList(entries);
  }

  const addExperience = () => {
    setExperienceList([...experienceList, formFields]);
    toast.success("New experience added")
  }

  const removeExperience = () => {
    setExperienceList(prev => prev.slice(0, -1));
    toast.success("Last experience removed");
  }

  useEffect(() => {
    setResumeInfo({ ...resumeInfo, experience: experienceList });
  }, [experienceList])

  return (
    <div>
      <h1 className='text-xl font-semibold'>Professional Experience</h1>
      <p className='text-lg'>Add your professional experience here</p>
      <hr className='mt-2 bg-gray-300 h-[2px]' />

      <div className='mt-2'>
        <Accordion type="single" collapsible>
          {experienceList.map((experience, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border my-1 rounded">
              <AccordionTrigger className="px-2">{experience.title} - {experience.companyName}</AccordionTrigger>
              <AccordionContent>
                <form className='grid grid-cols-2 gap-2 px-2' onSubmit={e => e.preventDefault()}>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor='title'>Title</Label>
                    <Input name="title" id="title" value={experience.title} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor='companyName'>Company</Label>
                    <Input name="companyName" id="companyName" value={experience.companyName} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor="city">City</Label>
                    <Input name="city" id="city" value={experience.city} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor='state'>State</Label>
                    <Input name="state" id="state" value={experience.state} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor='startDate'>Start date</Label>
                    <Input name="startDate" id="startDate" value={experience.startDate} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor='endDate'>End Date <span className='text-xs text-gray-400'>(Leave empty if present)</span></Label>
                    <Input name="endDate" id="endDate" value={experience.endDate} onChange={(e) => handleInputChange(e, index)} />
                  </div>

                  <div className='col-span-2'>
                    <RichTextEditor
                      title={experience.title}
                      defaultValue={experience.workSummary}
                      label={"Work Description"}
                      handleTextEditorChange={(e) => handleTextEditorChange(e, index, "workSummary")}
                    />
                  </div>
                </form>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className='mt-10'>
          <div className='flex gap-2'>
            <Button size="sm" variant="secondary" className="flex gap-1" onClick={removeExperience}><MinusIcon className='text-gray-500 w-5 h-5' /> Remove</Button>
            <Button size="sm" className="flex gap-1" onClick={addExperience}><Plus className='w-5 h-5' /> Add Experience</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalExperience