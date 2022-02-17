import React, { Component } from 'react'
import Card from '../components/Card'

export default class Portfolio extends Component {
  render() {
    return (
      <div className='container'>
          <div className='row'>
            <Card
                title="ldld..."
                description={"dfasdfasf"}
                website={"https://youtube.com"}
                github={"https://github.com"}
            />
             <Card
                title="wtf..."
                description={"dfasdfasf"}
                website={"https://youtube.com"}
                github={"https://github.com"}
            />
          
            
          </div>
           
      </div>
    )
  }
}
