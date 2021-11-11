import React from 'react';
import Header from './Layout/Header';
const Home = () => {
    return (
        <div>
            {/* header */}
           <Header height='50vh' text={<h1 className="text-white">Generate more leads with <br/> a professional landing page</h1>} />
           {/* end of header */}


           {/* main section */}

    {/* feature section */} 
        <div className="container-fluid bg-light">
                <div className="container py-5">
                        <div className="row py-4">

                                <div className="featureBox col d-flex flex-column 
                                    justify-content-center align-items-center">
                                        
                                        <i className="far fa-window-restore text-primary"></i>
                                        <h3 className="mt-4">Fully Responsive</h3>
                                        <p className="mt-1">
                                        This theme will look great on any device, 
                                        no matter the size!</p>
                                </div>

                                <div className="featureBox col d-flex flex-column 
                                    justify-content-center align-items-center">
                                        
                                        <i className="fas fa-layer-group text-primary"></i>
                                        <h3 className="mt-4">Bootstrap 5 Ready</h3>
                                        <p className="mt-1">
                                        Featuring the latest build of the 
                                        new Bootstrap 5 framework!</p>
                                </div>

                                <div className="featureBox col d-flex flex-column 
                                    justify-content-center align-items-center">
                                        <i className="fas fa-terminal text-primary"></i>
                                        <h3 className="mt-4">Easy to Use</h3>
                                        <p className="mt-1 text-center">
                                        Ready to use with your own content, 
                                        or customize the source files!</p>
                                </div>
                        </div>

                </div>
        </div>


     {/*End of  feature section */} 

    {/* About section */}
    <div className="container-fluid">
         {/* row 1  */}
         <div className="row">
         <div className="col-6 d-flex d-flex 
                        justify-content-center align-items-center">
                            <div className="textAboutBox d-flex flex-column
                                align-items-start justify-content-center">
                                <h2 className="mb-2">Fully Responsive Design</h2>
                                <p className="text-start">When you use a theme created by Start Bootstrap, 
                                you know that the theme will look great on any device, whether it's a phone,
                                 tablet, or desktop the page will behave responsively!</p>
                            </div>
                            </div>
                            <div className="col-6 imageBox1">
                            {/* background image1 comes form CSS */}
                        </div>
         </div>
         {/* row 2  */}
         <div className="row">
                         <div className="col-6 imageBox2">
                            {/* background image1 comes form CSS */}
                        </div>
                        <div className="col-6 d-flex d-flex 
                        justify-content-center align-items-center">
                            <div className="textAboutBox d-flex flex-column
                                align-items-start justify-content-center">
                                <h2 className="mb-2">Updated For Bootstrap 5</h2>
                                <p className="text-start">
                                    Newly improved,and full of great utility classes,Bootstrap 5
                                    is leading the way in mobile responsive web development! All
                                    of the themes on Start Bootstrap are now using Bootstrap 5 !
                                     </p>
                            </div>

                        </div>
         </div>
          {/* Row 3 */}
          <div className="row">
          <div className="col-6 d-flex d-flex 
                        justify-content-center align-items-center">
                            <div className="textAboutBox d-flex flex-column
                                align-items-start justify-content-center">
                                <h2 className="mb-2">Easy to Use & Customize</h2>
                                <p className="text-start">  
                                     Landing Page is just HTML and CSS with asplash ofSCSS for users 
                                    who deamand some deeper customization options.Out of the box,just add 
                                    your contentand images,and your new landing page will be ready to go!</p>
                            </div>

                        </div>

                        <div className="col-6 imageBox3">
                            {/* background image1 comes form CSS */}
                        </div>
          </div>
    </div>
    
  {/*End of About  section*/}
{/* Team Section */}
<div classname="container-fluid bg-light p-5">
     
{/* Three columns of text below the carousel */}
<div className="row mt-4">
    <h1 className='mb-5 mt-5 titel-team'>What people are saying...</h1>
  <div className="col-lg-4">
  <img src="images/img-1.jpg" alt="img-1" className="circular--square" />    
  <h5 className="mt-3">Margaret E.</h5>
    <p className='team-p'>"This is fantastic! Thanks so much guys!"</p>

  </div> {/* /.col-lg-4 */}
 
  <div className="col-lg-4">
  <img src="images/img-2.jpg" alt="img-1" className="circular--square" />    
  <h5 className="mt-3">Fred S.</h5>
    <p className='team-p'>"Bootstrap is amazing. I've been using it
        to create lots of super nice landing pages."
    </p>
    
  </div>{/* /.col-lg-4 */}
  <div className="col-lg-4">
  <img src="images/img-3.jpg" alt="img-1" className="circular--square" />
 
    <h5 className="mt-3">Sarah W.</h5>
    <p className='team-p'>"Thanks so much for making these free resources
        available to us!"
    </p>
    
  </div>{/* /.col-lg-4 */}
</div>{/* /.row */}


</div> {/* End of Team */}

{/* second header section */}
    < Header height="30vh" text={<h1 className="text-white">Ready to get started? Sign up now!</h1>} />
{/* end of second header section */}

    {/* End of main section */}
  
</div>
    );
}

export default Home;
