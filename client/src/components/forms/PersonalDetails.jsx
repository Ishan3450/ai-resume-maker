import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Label } from '@radix-ui/react-label';
import React, { useContext } from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const PersonalDetails = () => {
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
      <h1 className='text-xl font-semibold'>Personal Details</h1>
      <p className='text-lg'>Get started with the basic information</p>
      <hr className='mt-2 bg-gray-300 h-[2px]' />

      <form className='mt-5 grid grid-cols-2 gap-2'>

        <div>
          <Label htmlFor='firstName'>First Name</Label>
          <Input className="mt-1" name="firstName" id="firstName" value={resumeInfo.firstName} onChange={handleInputChange} requried />
        </div>
        <div>
          <Label htmlFor='lastName'>Last Name</Label>
          <Input className="mt-1" name="lastName" id="lastName" value={resumeInfo.lastName} onChange={handleInputChange} requried />
        </div>
        <div>
          <Label htmlFor='phone'>Phone</Label>
          <Input className="mt-1" name="phone" id="phone" value={resumeInfo.phone} onChange={handleInputChange} requried />
        </div>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input type="email" className="mt-1" name="email" id="email" value={resumeInfo.email} onChange={handleInputChange} requried />
        </div>
        <div className='col-span-2'>
          <Label htmlFor='address'>Address</Label>
          <Input className="mt-1" name="address" id="address" value={resumeInfo.address} onChange={handleInputChange} />
        </div>
      </form>
    </div>
  )
}

export default PersonalDetails