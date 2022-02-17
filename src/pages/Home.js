import React, { Component } from 'react'
import './styles.css'
import pic from '../assets/cupcat.png'


export default class Home extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <div className='row text-center'>
                    <div className='col'>
                        <img src={pic} alt="profile pic" className='rounded-circle' id='cat'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <button type="button" id="btn-1">
                                Portfolios
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <button type="button" id="btn-2">
                                Github
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <button type="button" id="btn-2">
                                LinkedIn
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <button type="button" id="btn-2">
                                Twitter
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <button type="button" id="btn-2">
                                Resume
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                    </div>
                </div>
            </div>
        )
    }
}
