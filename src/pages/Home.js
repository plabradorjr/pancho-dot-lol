import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import pic from '../assets/cupcat.png'
import LinkTreeButton from '../components/LinkTreeButton';


export default class Home extends Component {

    render() {
        return (
            <div className='container'>
                <div className='row text-center'>
                    <div className='col'>
                        <img src={pic} alt="profile pic" className='rounded-circle' id='cat'/>
                    </div>
                </div>
                <div className='row justify-content-center' id="recenter">
                    <div className='col-sm-4'>
                        <Link to="/portfolio">
                        <div className='row'>
                            <button type="button" id="btn-1">
                                Portfolio
                            </button>
                        </div>
                        </Link>
                    </div>
                </div>

                <LinkTreeButton
                    name="Github"
                    link="https://github.com/plabradorjr"
                />

                <LinkTreeButton
                    name="LinkedIn"
                    link="https://www.linkedin.com/in/plabrador/"
                />

                <LinkTreeButton
                    name="Twitter"
                    link="https://twitter.com/0xSer"
                />
            
                <div className='row justify-content-center' id='recenter'>
                    <div className='col-sm-4'>
                        <div className='row'>
                            <button type="button" id="btn-2">
                                Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
