import React from 'react'

export default function ProductCard(props) {
  return (
    <div className="top-head">
        <div className="container">
            <div className="row">
                <div className="col3">
                    <div className="card">
                    <h3>{props.leptopCompanyName}</h3>
                    <div className="card-img">
                        <img src=  {props.leptopImg}/>
                       
                    </div>
                    <div className="card-title">
                        {props.leptopName}
                    </div>
                    <div className="btn-div">
                    <div className="col-6">
                        {props.cart}
                    </div>
                    <div className="col-4">
                        {props.like}
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
