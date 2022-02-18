import React from 'react'
import resume from '../assets/panchoLabrador_resume.pdf'
import Navbar from '../components/Navbar';

const Resume = () => {
    return (
        <>
        <Navbar />
        <div className='container-fluid'>
            <div className='row'>
                <div className='col no-float text-center'>
                    <iframe src={resume}
                    height="1100px"
                    width="100%"
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Resume;
