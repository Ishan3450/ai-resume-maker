import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext, useState } from 'react'
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PersonalDetails from './forms/PersonalDetails';
import Summary from './forms/Summary';
import Skills from './forms/Skills';
import ProfessionalExperience from './forms/ProfessionalExperience';
import Projects from './forms/Projects';
import Education from './forms/Education';
import SocialLinks from './forms/SocialLinks';

const ResumeSetupFormSection = () => {
    const [activePageIndex, setActivePageIndex] = useState(1);

    return (
        <div className='pl-1 pr-3 pt-2 w-[40%]'>
            <div className='flex gap-2 justify-end'>
                {activePageIndex > 1 && <Button onClick={() => setActivePageIndex(prev => prev - 1)} variant="outline" ><ArrowLeft className='text-gray-700' /></Button>}
                {activePageIndex <= 6 && <Button className="flex items-center gap-2" onClick={() => setActivePageIndex(prev => prev + 1)}>Next <ArrowRight className='text-white w-5 h-5' /></Button>}
            </div>

            {/* Personal Details */}
            {activePageIndex === 1 && <PersonalDetails />}

            {/* Social Links */}
            {activePageIndex === 2 && <SocialLinks />}

            {/* Summary */}
            {activePageIndex === 3 && <Summary />}

            {/* Skills */}
            {activePageIndex === 4 && <Skills />}

            {/* Professional Experience */}
            {activePageIndex === 5 && <ProfessionalExperience />}

            {/* Projects */}
            {activePageIndex === 6 && <Projects />}

            {/* Educational background */}
            {activePageIndex === 7 && <Education />}

        </div>
    )
}

export default ResumeSetupFormSection;