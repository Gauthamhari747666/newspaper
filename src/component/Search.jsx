import React from 'react'
import Navbar from './Navbar'
const Search = () => {
  return (
    <div>
       <div className="conatiner">
       <Navbar />
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12 col-xl-12">
                <div className="row g-3">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Search</label>
                        <input type="text" className="form-control" />
                        <button class="btn btn-danger">Submit</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Search