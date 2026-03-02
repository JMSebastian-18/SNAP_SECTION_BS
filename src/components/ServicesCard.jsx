import React from 'react'

export const ServicesCard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-3 text-start">
            <img src="./zana.png" alt="" />
            <h2>Whole-food recipes</h2>
            <p className="d-flex flex-row mb-3">Each dish uses everyday, unprocessed ingredients.</p>
          </div>
          <div className="col mt-3 text-start">
            <img src="./rayo.png" alt="" />
            <h2>Minimum fuss</h2>
            <p className="d-flex flex-row mb-3">All recipes are designed to make eating healthy quick and easy.</p>
          </div>
          <div className="col mt-3 text-start">
            <img src="./lupa.png" alt="" />
            <h2>Search in seconds</h2>
            <p className="d-flex flex-row mb-3">Filter by name or ingredient and jump straight to the recipe you need.</p>
          </div>
        </div>
      </div>
    </>
  )
}
