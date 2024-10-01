import { File } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SingleResumeCard = ({ resume }) => {
  return (
    <Link to={`/dashboard/resume/${resume._id}/edit`}>
      <div className='flex flex-col gap-2'>
        <div className='bg-gray-200 flex items-center justify-center aspect-square rounded-xl cursor-pointer hover:bg-gray-300 transition-all duration-150 hover:shadow-xl'>
          <File className='text-gray-400' />
        </div>
        <div className='text-center'>{resume.resumeTitle}</div>
      </div>
    </Link>
  )
}

export default SingleResumeCard