import styled from "styled-components";
import React from "react"

export default function Contact(){
    const Styleh=styled.div`
    color:;`
    const Stylep3=styled.div`
    color:;`
    return(
      <section className="row">
      <div className="container row ">
          <Styleh><h4 className="text-center mt-5">GET IN TOUCH</h4></Styleh>
          <Stylep3><p className="para col-12 col-md-10 col-lg-7 text-center mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry.</p></Stylep3>
      </div>

     
      <div className="ms-3  col-12 col-md-6 d-flex">
              <img src="../images/illustration/imgs11 (1).jpg" alt=""  className="img-fluid"/>
              <form >
                   <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="text" name="name" placeholder="Email address*" className="in-put"/>

                  </div>
                  <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="text" name="name" placeholder="Password*" className="in-put"/>
                  </div>
                 
                      <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              </div>

           

  </section>


    )
}
