import Currency from '../components/currencyConverter';
import '../css/styles.css';
import banner from '../images/banner.png';
import cover from '../images/cover.jpg';
const Home = () => {

    return (
        <div>
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">Welcome to iMasterepair</h1>
                <p className="lead fw-normal text-white-50 mb-4">iMaster is your go-to mobile phone shop and repair center. 
                    We offer a wide range of devices and expert repair services, including screen fixes and more. 
                    Our skilled technicians provide fast, reliable, and affordable solutions to meet all your mobile needs. Visit iMaster for quality products and services!</p>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img className="img-fluid rounded-3 my-5" src={cover} alt="..." />
            </div>
          </div>
        </div>
      </header>

      <section className="py-5" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
                <img className="img-fluid rounded-3 my-5" src={banner} alt="..." />
            </div>
            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <h2 className="h5">Wide Range of Mobile Devices</h2>
                  <p className="mb-0">We offer the latest smartphones from top brands, ensuring you find the perfect device to suit your needs and budget.</p>
                </div>
                <div className="col mb-5 h-100">
                  <h2 className="h5">Expert Repair Services</h2>
                  <p className="mb-0">Our skilled technicians specialize in fast and efficient repairs, from screen replacements to battery issues, 
                    ensuring your phone is as good as new.</p>
                </div>
                <div className="col mb-5 mb-md-0 h-100">
                  <h2 className="h5">Affordable Solutions</h2>
                  <p className="mb-0">At iMaster, we believe in providing quality services at competitive prices, making mobile repairs and upgrades accessible to everyone.</p>
                </div>
                <div className="col h-100">
                  <h2 className="h5">On-the-Spot Repairs</h2>
                  <p className="mb-0">We offer quick, on-the-spot repairs for most issues, so you don’t have to wait long to get your phone back.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
      <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder">Today's Currency Exchange Rates</h2>
                <Currency/>
              </div>
            </div>
          </div>
      </section>
        </div>


    );
}
 
export default Home;