import React from 'react';
import { NotepadText, BriefcaseBusiness, BookText, Users } from 'lucide-react';
import Logo from '../../assets/Logo.png'

const steps = [
    { id: 0, title: "Create an account", icon: NotepadText },
    { id: 1, title: "Set Preferences", icon: BriefcaseBusiness },
    { id: 2, title: "Setting workspace", icon: BookText },
    { id: 3, title: "Invite member", icon: Users },
];

const ProgressSidebar = ({ currentStep }) => {
    return (
        <div>
            <img src={Logo} className='w-[65px] h-[63px] mt-4 ml-2' />

            <div className='border-b p-4 border-gray-200'>
                <h1 className='text-[20px] font-medium'>Create account</h1>
                <h2 className='text-gray-600 text-[14px] pt-3'>
                    Please fill in each step properly and correctly, make sure no data is missing
                </h2>
            </div>

            <div className='p-4'>
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isLast = index === steps.length - 1;

                    return (
                        <div key={index} className='flex gap-4'>
                            {/* ICON + LINE COLUMN */}
                            <div className='flex flex-col items-center'>
                                {/* Outer Circle */}
                                <div className={`${index < currentStep ? "border-[#7575C6]" : "border-gray-200"} border rounded-full p-1`}>
                                    {/* Inner Circle */}
                                    <div className={`${index < currentStep ? "bg-[#7575C6] text-white" : "bg-gray-200 text-gray-600"} rounded-full p-3`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Vertical Line */}
                                {!isLast && (
                                    <div className={`${index < currentStep ? "bg-[#7575C6]" : "bg-gray-300"} w-[2px] h-10 transition duration-400`} />
                                )}
                            </div>

                            {/* TEXT COLUMN */}
                            <div className="pt-1">
                                <h1 className='text-gray-600 text-[12px]'>Step {step.id + 1}</h1>
                                <h2 className='font-medium text-[13px]'>{step.title}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressSidebar;
