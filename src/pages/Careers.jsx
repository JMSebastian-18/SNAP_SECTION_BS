import React from 'react'
import { ServicesCard } from '../components/ServicesCard'

export const Careers = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col" >
                        <div className='d-flex justify-content-center h-100 gap-5'>
                            <div>
                                {/* contenido */}
                                <h1 className='fs-1 container text-center'>Healthy meals, zero fuss</h1>
                                <p className='container text-center'>Discover eight quick, whole-food recipes that your con cook tonight <br /> —no processed junk, no guesswork. </p>
                                <div className='container text-center mt-4'>
                                    <a href='https://youtu.be/xvFZjo5PgG0?si=mi4M7-_1oAFob7DW' className=" btn btn-success">Start exploring</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center h-100 gap-5 mt-5  ">
                            {/* liga */}
                            <img src="./hollooow.jpg" width={900} alt="" />
                        </div>


                    </div>
                    <div className="" >
                        <div className='d-flex justify-content-center h-100 gap-5 mt-5'>
                            <div>
                                {/* contenido */}
                                <h1 className='fs-1 container text-center'>What you'll get</h1>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
