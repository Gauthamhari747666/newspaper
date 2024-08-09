import React from 'react'
import Navbar from './Navbar'
const Add = () => {
  return (
    <div>
        <div className="container">
        <Navbar />
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <div className="row-3">
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Subscriber Name</label>
                            
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="from-label">Ph no</label>
                            
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="from-label">Address</label>
                            <input type="text" className="form-control" />
                        </div>
                        
                       
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Pincode</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">District</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Village ofiice</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email id</label>
                            <input type="text" className="form-control" />
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add