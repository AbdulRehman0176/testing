import React from 'react'

export default function Cartask4(props) {
    return (
        <>
        <div style={{display:"flex"}}>

        
            <div className="container" >
                <div className="row" >
                    <div className="col-4" >
                        <div class="card" >
                            <img src={props.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{props.carName}</h5>
                                <p class="card-text">{props.description}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
