import React, { useContext } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { Label } from '@radix-ui/react-label';
import { Button } from '../ui/button';
import { BrainCircuit } from 'lucide-react';

const Summary = () => {
  const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setResumeInfo({
        ...resumeInfo,
        [name]: value
    })
}

  return (
    <div>
      <h1 className='text-xl font-semibold'>Summary</h1>
      <p className='text-lg'>Add summary which describes your purpose</p>
      <hr className='mt-2 bg-gray-300 h-[2px]' />

      <div className='mt-6'>
        <div className='flex justify-between items-end'>
          <Label htmlFor='summary' className='font-semibold'>Add Summary</Label>
          <Button variant="outline" className="flex gap-1"><BrainCircuit/> Generate from AI</Button>
        </div>

        <Textarea name="summary" id="summary" onChange={handleInputChange} className="mt-2" value={resumeInfo?.summary} rows={10} required/>
      </div>
    </div>
  )
}

export default Summary