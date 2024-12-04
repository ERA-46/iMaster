import '../css/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h5>iMasterepair</h5>
              <p>&copy; {new Date().getFullYear()} iMasterepair. All Rights Reserved.</p>
              <p>Designed and developed by Eranda Irushan</p>
            </div>
            <div className="footer-center">
                <p>Temple Junction<br/>
                Veyangoda Road<br/>
                Dewalapola<br/>
                Sri Lanka<br/></p>
                <p>+94 (70) 279 9352</p>
            </div>
            <div className="footer-right">
              <ul className="social-links">
                <li><a href="https://www.facebook.com/iMasterepairSL" className="social-icon"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/imasterepair/" className="social-icon"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}
 
export default Footer;