import logo from '../assets/logo.png';
import './About.css';


function About() {

  return (
    <div className="About">
        <section className="section-about about-section gray-bg" id="about">
            <div className="container-about">
                <div className="row align-items-center-about flex-row-reverse">

                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="color1">We are</h3>
                            <p>The <b className="color2">first company specializing in the rental of guest houses in Tunisia</b>,
                             covering all regions of the country. Our mission is to offer travelers authentic and unforgettable stays,
                              whether they are looking for a house with a sea view, a forest retreat or an experience in the Sahara. Thanks to our platform,
                               it is easy to discover, compare and reserve unique homes, to live a local and personalized experience in complete safety.</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src={logo} alt="logosansback" className="logo1" />
                        </div>
                    </div>

                </div>

                
                <div className="counter">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" >500</h6>
                                <p className="m-0px font-w-600">Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" >150</h6>
                                <p className="m-0px font-w-600">Project Completed</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" >850</h6>
                                <p className="m-0px font-w-600">Photo Capture</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2">190</h6>
                                <p className="m-0px font-w-600">Telephonic Talk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default About;
