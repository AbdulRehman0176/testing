import React from 'react'

export default function Htmlpage() {
  return (
    <>
    <div className="navigation">
    <div className='nav-left'>
    <ul>
        <li><a href=''>Logo</a></li>
        <li><a href=''>Work</a></li>
        <li><a href=''>Services</a></li>
        <li><a href=''>About</a></li>
    </ul>
    </div>
    <div className="nav-right">
        <ul>
            <li><a href=''>blog</a></li>
            <li><a href=''>Planner</a></li>
        </ul>
    </div>
    </div>

    <div className="slider">
        <div className="container">
            <div className="row">
                <div className="col-6 slider-left">
                    <h2 className='head-one-slider'>Articles for</h2>
                    <h2 className='head-two-slider'>front-end devs</h2>
                    <p>Articles on web performance, responsive <br></br>Web design and more</p>
                </div>
                <div className="col-6">
                    <img src='https://www.shutterstock.com/image-vector/cute-children-waving-hand-600nw-215671783.jpg' style={{width : '380px'}}></img>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
