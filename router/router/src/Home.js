import styled from "styled-components"


export default function Home(){
    const Styleh4=styled.div`
    color:#fff;`
    const Styleh1=styled.div`
    color:black;`
    const Styleh3=styled.div`
    color:;`
    const Stylep=styled.div`
    color:;`
    const Styleh6=styled.div`
    color:;`
    const Styleh=styled.div`
    color:;`
    const Stylep3=styled.div`
    color:;`

    return(
        <section>
                <section className="home text-center d-flex justify-content-center align-items-center">
            <div>
               
                <Styleh4><h1>WELCOME TO
                             CONTENT WRITING SERVICES</h1></Styleh4>
                <Styleh4><p><b>  It is a long established fact that a reader will be distracted by the readable content of a pagewhen looking</b></p></Styleh4>
                <button className="read btn btn-danger ">READ MORE</button>
            </div>
            
            
            
        </section>
        {/* About  section */}
        <section className="row mt-5">
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

{/* Work Section */}

<section>
            <Styleh3><h1 className="text-center mt-5">OUR LATEST WORK</h1></Styleh3>
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

        {/* Services Section */}

        <section>

              <Styleh6><h3 className="text-center mt-5">OUR SERVICES</h3></Styleh6>
                <div className="bckgrnd">
                <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                <div>
                    <figure>
                    <img src="https://cdn4.iconfinder.com/data/icons/set-1/32/__1-128.png" alt=""  width="70px"/>
                    <figcaption>
                        <h2>Written with Love</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution ofletters, as opposed to using 'Content here, content t,</p>
                        <div>
                        <button type="button" className="btn btn-outline-danger btn-lg">READ MORE</button>
                        </div>
                    </figcaption>
                    </figure>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                <div>
                <figure>
                    <img src="https://cdn4.iconfinder.com/data/icons/music-is-my-city/100/music-02-128.png" alt="" width="70px"/>
                    <figcaption>
                        <h2>Fast Turnaround</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution ofletters, as opposed to using 'Content here, content t,</p>
                        <div>
                        <button type="button" className="btn btn-outline-danger btn-lg">READ MORE</button>
                        </div>
                    </figcaption>
                    </figure>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                <div>
                <figure>
                    <img src="https://cdn0.iconfinder.com/data/icons/miscellaneous-483-mix/168/recent_new_latest_fresh_modern_up-to-date_neoteric_file_folder_timer-128.png" alt="" width="70px"/>
                    <figcaption>
                        <h2>Up to Date</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. the readable content of a page when at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution ofletters, as opposed to using 'Content here, content t,</p>
                        <div>
                        <button type="button" className="btn btn-outline-danger btn-lg">READ MORE</button>
                        </div>
                    </figcaption>
                    </figure>
                </div>
                </div>
                
                <div className="col-12 col-md-6 col-lg-3">
                <div>
                <figure>
                    <img src="https://cdn1.iconfinder.com/data/icons/startup-2-4/512/startup_-_seo_6-128.png" alt="" width="70px" />
                    <figcaption>
                        <h2>Premium Content</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution ofletters, as opposed to using 'Content here, content t,</p>
                        <div>
                        <button type="button" className="btn btn-outline-danger btn-lg">READ MORE</button>
                        </div>
                    </figcaption>
                    </figure>
                </div>
                </div>
                
            
            
            </div>
            </div>
            </div>

            </section>

        

        {/* Contact Section */}

        <section className="row">
            <div className="container row ">
                <Styleh><h4 className="text-center mt-5">GET IN TOUCH</h4></Styleh>
                <Stylep3><p className="para col-12 col-md-10 col-lg-7 text-center mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry.</p></Stylep3>
            </div>

           
            <div className="ms-5  col-12 col-md-6 d-flex">
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


        

        </section>
        
        
    )
}

