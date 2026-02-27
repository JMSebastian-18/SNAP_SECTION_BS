import React from 'react'
/*  */
import "../stylesheets/Home.css"

export const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6" >
                        <div className='d-flex flex-column justify-content-center h-100 gap-5'>
                            <div>
                                {/* contenido */}
                                <h1>Make<br />remote work</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis doloribus sed dolor deleniti officiis repellat, dolorum animi saepe neque recusandae </p>
                                <a href='http://www.jango.com' className="btn btn-dark">Learn more</a>
                            </div>
                            {/* logos */}
                            <div className='d-flex align-items-center gap-3'>
                                <img src="./clickup.svg" height="25" alt="" />
                                <img src="./linear.svg" height="25" alt="" />
                                <img src="./stripe.svg" height="25" alt="" />
                                <img src="./wiz.svg" height="25" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            {/* liga */}
                            <img src="./fondo.jpg" className="img-cropped" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
