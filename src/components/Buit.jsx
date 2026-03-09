import React from 'react'

export const Buit = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6" >
                        <div className='d-flex flex-column justify-content-center h-100 gap-5'>
                            <div>
                                
                                <h1>Built for real life</h1>
                                <p>Cooking shouldn't be complicated. These recipes come in under 30 minutes of active time, fit busy schedules, and taste good enough to repeat</p>
                                <p>Whether you're new to the kitchen or just need fresh ideas, we've got you covered.</p>
                            </div>
                            

                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            
                            <img src="./food.jpg" className="border border-5 rounded-5 img-cropped" alt="" />
                        </div>
                    </div>
                </div>
                <div className='p-5 mb-2 bg-secondary text-white mt-5 border border-5 rounded-5'>
                    <div className="container text-center mt-2">
                        <h1>Ready to cook smarter?</h1>
                        <p>Hit the button, pick a recipe, and get dinner on the table—fast.</p>
                        <a href='http://www.jango.com' className="btn btn-dark">Browse recipes</a>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p>Made with ❤️ and 🥑</p>
                    </div>
                    <div class="col text-end">
                        😊😁👍
                    </div>
                </div>
            </div>
        </>
    )
}
