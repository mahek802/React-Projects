
import React from "react"

export default function About(){
   
    return(
       
        <section>
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-12 col-lg">
              <img src="../images/illustration/imgs11 (4).png" alt="" className="img-fluid" />
            </div>
            <div className="col-12 col-lg ">
              <h2 className="fw-normal display-4 text-center">About Us</h2>
              <p className="lead">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution ofletters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their</p>
              <div className="mt-3 justify-content-center align-items-center">
                <button type="button" className="btn btn-danger me-2 justify-content-center align-items-center ">My Work</button>
                <button type="button" className="btn btn-outline-danger align-items-center">Contact Me</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}