import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from '@radix-ui/react-label';
import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { MinusIcon, Plus } from 'lucide-react';
import { Input } from '../ui/input';
import toast from 'react-hot-toast'
import RichTextEditor from '../RichTextEditor';


const Projects = () => {
  const formFields = {
    github: "",
    name: "",
    techStack: "",
    description: ""
  }

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [projectsList, setProjectsList] = useState(resumeInfo?.projects);

  const handleInputChange = (e, index) => {
    const entries = [...projectsList];
    entries[index][e.target.name] = e.target.value;
    setProjectsList(entries);
  }

  const handleTextEditorChange = (e, index, name) => {
    const entries = [...projectsList];
    entries[index][name] = e.target.value;
    setProjectsList(entries);
  }


  const addProject = () => {
    setProjectsList([...projectsList, formFields]);
    toast.success("New project added")
  }

  const removeProject = () => {
    setProjectsList(prev => prev.slice(0, -1));
    toast.success("Last project removed");
  }

  useEffect(() => {
    setResumeInfo({ ...resumeInfo, projects: projectsList });
  }, [projectsList])

  return (
    <div>
      <h1 className='text-xl font-semibold'>Projects</h1>
      <p className='text-lg'>Add projects showcasing your skills</p>
      <hr className='mt-2 bg-gray-300 h-[2px]' />

      <div className='mt-2'>
        <Accordion type="single" collapsible>
          {projectsList.map((project, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border my-1 rounded">
              <AccordionTrigger className="px-2">{project.name}</AccordionTrigger>
              <AccordionContent>
                <form className='grid grid-cols-2 gap-2 px-2' onSubmit={e => e.preventDefault()}>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor='name'>Name</Label>
                    <Input name="name" id="name" value={project.name} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlfor='github'>Github</Label>
                    <Input name="github" id="github" value={project.github} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                  <div className='col-span-2'>
                    <Label htmlFor='techStack'>Tech Stack <span className='text-sm text-gray-400'>(Enter ',' (comma) separated values)</span></Label>
                    <Input name="techStack" id="techStack" value={project.techStack} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                  <div className='col-span-2'>
                    <RichTextEditor
                      title={project.name}
                      defaultValue={project.description}
                      label={"Project Description"}
                      handleTextEditorChange={(e) => handleTextEditorChange(e, index, "description")}
                    />
                  </div>
                </form>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className='mt-10'>
          <div className='flex gap-2'>
            <Button size="sm" variant="secondary" className="flex gap-1" onClick={removeProject}><MinusIcon className='text-gray-500 w-5 h-5' /> Remove</Button>
            <Button size="sm" className="flex gap-1" onClick={addProject}><Plus className='w-5 h-5' /> Add Project</Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects