import React, { Component } from 'react'

export default class Home extends Component {


    render() {
        return (
            <div className="card">
            <div className="card-header py-4" id="heading-2-1" data-toggle="collapse" role="button" data-target="#collapse-2-1" aria-expanded="false" aria-controls="collapse-2-1">
                <h6 className="mb-0"><i data-feather="file" className="mr-3"></i>Which license do I need?</h6>
            </div>
            <div id="collapse-2-1" className="collapse" aria-labelledby="heading-2-1" data-parent="#accordion-2">
                <div className="card-body">
                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                </div>
            </div>
        </div>
        )
    }
}
