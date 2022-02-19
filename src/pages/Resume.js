import React from 'react'
import './resume.css'
import resume from '../assets/panchoLabrador_resume.pdf'
import Navbar from '../components/Navbar';

const Resume = () => {
    return (
        <>
        <Navbar />
        <div id="iframe-full">
            <iframe src={resume} width="100%" height="100%" title='resume'/>
        </div>
        </>
    )
}

export default Resume;
