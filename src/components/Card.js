import React from 'react'

const Card = ({title, description, stack, website, github}) => {
  
    return (
      <div className='col-md-6'>
            <div className='card'>
                <div className='card-body'>
                        <a href="" className='d-block h5 mt-3'>{title}</a>
                        <p className="text-sm text-muted">
                            {description}
                        </p>
                    <div className="row align-items-center mt-4">
                            <div className="col-6">
                                <a href={website} className="btn btn-sm btn-primary">Live website</a>
                            </div>
                            <div className="col-6">
                                <a href={github} className="btn btn-sm btn-secondary">GitHub</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Card;