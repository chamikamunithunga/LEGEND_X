import sec1Img from '../assets/batc.jpg';

const Section1 = () => {
  return (
    
    
    <div className="py-5 px-5 d-flex justify-content-center"  style={{background: 'linear-gradient(120deg, #030417 40%, #3b0a0a 100%)', height: '900px'}}>


        <div className="row  align-items-center mt-5 pt-4 px-5" style={{width: '1400px', marginTop: '200px'}}>


            <div className="col-lg-6">
              <img src={sec1Img} alt="Hero Illustration" className="img-fluid" style={{ width: '500px', height: '700px' }}/>
            </div>
         

            <div className="col-lg-6 text-left gap-2">
                <h1 className='mt-4 text-white' style={{fontSize: '60px'}}> EXPERIENCE  ERGONOMICS IN THE DARK KNIGHT’S CHAIR</h1>
              <p className="lead pt-3 text-secondary">THE DARK KNIGHT’S CHAIR BOASTS A STRIKING, SLEEK DESIGN INSPIRED BY BATMAN’S ICONIC SUIT, WITH SHARP ANGLES, STEALTH BLACK FINISHES, AND PREMIUM MATERIALS. CRAFTED WITH PRECISION, THE CHAIR FUSES AESTHETICS AND FUNCTIONALITY, FEATURING HIGH-GRADE LEATHER, CARBON FIBER ACCENTS, AND A BOLD SILHOUETTE THAT EVOKES POWER AND SOPHISTICATION, MAKING IT THE PERFECT STATEMENT PIECE FOR ANY BATCAVE.</p>
              <div className="mt-4 d-flex justify-content-between align-items-center" style={{width: '350px'}}>
                <div className='text-white'><i className="bi bi-check2-square"></i> Market</div>
                <div className='text-white'><i className="bi bi-check2-square"></i> Price</div>
                <div className='text-white'><i className="bi bi-check2-square"></i>Design</div>
              </div>
              <a href="#" className="btn btn-warning btn-lg mt-5 px-4 py-3 rounded-pill">Read More</a>
            </div>


        </div>
      
    </div>
  )
}

export default Section1
