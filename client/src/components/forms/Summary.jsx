import React, { useContext, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { Label } from '@radix-ui/react-label';
import { Button } from '../ui/button';
import { ArrowUpRight, Brain, BrainCircuit, Loader2 } from 'lucide-react';
import { AIChatSession } from '../../../service/AiModel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from '../ui/input';
import toast from 'react-hot-toast';

const Summary = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [open, setOpen] = useState(false);
  const [jobTitle, setJobtitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiGeneratedJsonResponse, setAiGeneratedResponse] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo({
      ...resumeInfo,
      [name]: value
    })
  }

  const GenerateSummaryFromAI = async () => {
    try {
      setLoading(true);
      const prompt = `Job Title: ${jobTitle}, based on job title give me a 2 to 3 line profile summary for my resume in JSON format with field experience level and summary having experience level Fresher, Mid-Level and Experienced, Format: each level will loog like {experienceLevel: "", summary: ""}`
      const result = await AIChatSession.sendMessage(prompt);
      setAiGeneratedResponse(JSON.parse(result.response.text()));
      toast.success("Response Generated")
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }

  const handleChangeSummary = (summary) => {
    if (resumeInfo.summary !== summary) {
      setResumeInfo({
        ...resumeInfo,
        summary
      })
    }
  }

  return (
    <div>
      <h1 className='text-xl font-semibold'>Summary</h1>
      <p className='text-lg'>Add summary which describes your purpose</p>
      <hr className='mt-2 bg-gray-300 h-[2px]' />

      <div className='mt-6'>
        <div className='flex justify-between items-end'>
          <Label htmlFor='summary' className='font-semibold'>Add Summary</Label>
          <Button variant="outline" className="flex gap-1" onClick={() => setOpen(true)}><BrainCircuit /> Generate from AI</Button>
        </div>

        <Textarea name="summary" id="summary" onChange={handleInputChange} className="mt-2" value={resumeInfo?.summary} rows={7} required />

        <div className='font-semibold mt-4 flex gap-2 items-center'><Brain className="w-5 h-5" />AI Response <span className='text-sm text-gray-400'>(Click below items to view the response)</span></div>
        <div className='border my-3 rounded-lg flex flex-col gap-3 p-3 max-w-xs'>
          {Object.entries(aiGeneratedJsonResponse).map(([key, value]) => (
            <div className='flex justify-between cursor-pointer items-center border-b pb-2 border-gray-300' onClick={() => handleChangeSummary(value.summary)}>
              <div className="font-semibold">{key}</div>
              <div><ArrowUpRight className='text-gray-400 w-5 h-5 hover:text-gray-500' /></div>
            </div>
          ))}
        </div>

      </div>

      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Provide your job title</DialogTitle>
            <DialogDescription>
              <p>Enter your job title based on that summary will be generated</p>

              <div className='mt-5 text-black'>
                <Label className='text-lg'>Job Title</Label>
                <Input className="mt-1" placeholder="Ex. Fullstack Developer" value={jobTitle} onChange={(e) => setJobtitle(e.target.value)} />
              </div>

              <div className='flex gap-2 justify-end mt-4'>
                <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                <Button className="flex gap-1" disabled={!jobTitle || loading} onClick={GenerateSummaryFromAI}>
                  {
                    !loading ? <><BrainCircuit /> Generate Summary</> : <><Loader2 className='animate-spin' /> Generating your summary...</>
                  }
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default Summary