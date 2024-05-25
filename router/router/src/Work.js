import styled from "styled-components";
import React from "react"

export default function Work(){
    const Styleh3=styled.div`
    color:;`
    const Stylep=styled.div`
    color:;`
    return(
        <section>
            <Styleh3><h4 className="text-center mt-5">OUR LATEST WORK</h4></Styleh3>
            <Stylep><p className="para col-12 col-md-10 col-lg-7 text-center mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry.</p></Stylep>
            
            <div>
                <img src="../images/illustration/con1.avif" alt="" className="img-fluid col-12 col-md-6 col-lg-4" />
                <img src="../images/illustration/con2.avif" alt="" className="img-fluid col-12 col-md-6 col-lg-4" />
                <img src="../images/illustration/con3.avif" alt="" className="img-fluid col-12 col-md-6 col-lg-4" />
                <img src="../images/illustration/con4.avif" alt="" className="img-fluid col-12 col-md-6 col-lg-4" />
                <img src="../images/illustration/con5.avif" alt="" className="img-fluid col-12 col-md-6 col-lg-4" />
                <img src="../images/illustration/con6.avif" alt="" className="img-fluid col-12 col-md-6 col-lg-4" />
                {/* <img src="../images/illustration/con7.avif" alt="" className="img-fluid col-12 col-md-6 col-lg-4" />
                <img src="../images/illustration/con8.avif" alt="" className="img-fluid col-12 col-md-6 col-lg-4" />
                <img src="../images/illustration/con1.avif" alt="" className="img-fluid col-12 col-md-6 col-lg-4" /> */}

            </div>

            
        </section>
    )
}