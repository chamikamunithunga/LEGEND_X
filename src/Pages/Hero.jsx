
import heroImage from '../assets/b1.png';
import logoImg from '../assets/Batman-Logo.png';

const Hero = () => {
  return (
    <div>
      <section className="hero-section text-light" style={{ backgroundColor: '#050f21', height: '1000px' }}>
        <div className="container py-4">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#"><img src={logoImg} alt="XMM Logo" style={{width: '120px'}}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item mr-5">
                  <a className="nav-link fs-5" href="#about">Home</a>
                </li>
                <li className="nav-item mr-5">
                  <a className="nav-link fs-5" href="#tokenomics">Legendary Chair</a>
                </li>
                <li className="nav-item mr-5">
                  <a className="nav-link fs-5" href="#roadmap">Dark Knight</a>
                </li>
                <li className="nav-item mr-5">
                  <a className="nav-link fs-5" href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-warning rounded-pill ml-auto px-5 py-3 text-white" href="#">Buy Chair</a>
          </nav>
          

          {/* Hero Content */}
          <div className="row align-items-center mt-4 pt-4" style={{width: '1400px'}}>
            <h1 className=" font-weight-bold mt-2" style={{fontSize: '125px'}}>COMMAND GOTHAM’S THRONE, WHERE LEGENDS REST..</h1>
            <div className="col-lg-7 text-left gap-2">
              <p className="lead pt-3">"EMBRACE THE LEGEND OF THE DARK KNIGHT AND RULE GOTHAM FROM THE ICONIC SEAT OF POWER, WHERE HEROES RISE AND VILLAINS FALL."</p>
              <a href="#" className="btn btn-warning btn-lg mt-4 rounded-pill">Join Whatsapp</a>
              <div className="mt-4">
                <h4 className='mt-4'>OUR HAPPY CUSTOMERS</h4>
                <p className="lead mt-4">Our happy customers are at the heart of everything we do</p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="col-lg-5">
              <img src={heroImage} alt="Hero Illustration" className="img-fluid" style={{ width: '800px', height: '600px', marginTop: '-80px' }}/>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        
      </section>
    </div>
  );
};

export default Hero;
