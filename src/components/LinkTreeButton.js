import React from 'react'

const LinkTreeButton = ({name, link}) => {

    return (
        <div className='row justify-content-center'>
                   
            <a href={link} target="_blank" rel="noreferrer" className='col-sm-4'>
                <div className='row'>
                    <button type="button" id="btn-2">
                        {name}
                    </button>
                </div>
            </a>
       
        </div>
    )
  
}


export default LinkTreeButton;