import { File, Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import GlobalApi from '../../service/GlobalApi'
import toast from 'react-hot-toast'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"


const SingleResumeCard = ({ resume, updateResumesList }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  async function deleteResume() {
    setLoading(true);
    const response = await GlobalApi.DeleteResumeById(resume._id);

    if (response?.data.success) {
      toast.success(response.data.message);
      updateResumesList();
    }

    setLoading(false);
  }

  return (
    <div className='flex flex-col gap-2'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className='bg-gray-200 flex items-center justify-center aspect-square rounded-xl cursor-pointer hover:bg-gray-300 transition-all duration-150 hover:shadow-xl'>
            <File className='text-gray-400' />
          </div>
          <div className='text-center mt-1'>{resume.resumeTitle}</div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => navigate(`/dashboard/resume/${resume._id}/edit`)}>Edit</DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate(`/dashboard/resume/${resume._id}/view`)}>View and Download</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setAlertOpen(true)}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={alertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your resume
              and remove the resume data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setAlertOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={deleteResume} disabled={loading}>
              {
                loading ? <Loader2 className='animate-spin' /> : "Continue"
              }
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  )
}

export default SingleResumeCard