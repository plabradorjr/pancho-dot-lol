import React from 'react'
import './card.css'
const Card = ({title, description, stack, website, github, youtube, image}) => {

    let youtubeButton;
    if (youtube) {
        youtubeButton = <div className="col-sm-4"><a href={youtube} target="_blank" rel="noreferrer" className="btn btn-block btn-sm btn-outline-white">YouTube</a></div>;
    }

    let imageBanner;
    if (image) {
      imageBanner = (<div className="position-relative overflow-hidden">
                        <img alt="placeholder" src={image} className="card-img-top"/>
                    </div>)
    }

    let githubButton;
    if (github) {
      githubButton = (<div className="col-sm-4">
                        <a href={github} target="_blank" rel="noreferrer" className="btn btn-block btn-sm btn-outline-white mb-1">GitHub</a>
                      </div>)
    }

    return (
      <div className='col-md-8'>
            <div className='card' id='card-blurr'>
                        {imageBanner}
                <div className='card-body'>
                        <div className='d-block h5 mt-3'>{title}</div>
                        <p className="text-sm text-muted">
                            {description}
                        </p>
                        <h6>Stack:</h6>
                        <p className="text-sm text-muted">{stack}</p>
                    <div className="row mt-4">
                            <div className="col-sm-4">
                                <a href={website} target="_blank" rel="noreferrer" className="btn btn-block btn-sm mb-1" id='btn-gradient'>Live website</a>
                            </div>
                            {githubButton}
                            {youtubeButton}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Card;