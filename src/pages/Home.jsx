
import { Link } from 'react-router-dom';
import '../css/style.css';

const Home = () => {

  return (
    <>
      <main className="main-container">
        <div className="about">
          <p className='services'>Printing Services</p>
          <div className="title-container">
            <p className='b-name'>Color Hue Prints</p>
            <p className='sub-name'>powered by den prints & services</p>
          </div>
        </div>

        <div className="objects"></div>
        <div className="objects1"></div>
        <div className="objects2"></div>
        <div className="objects3"></div>

        <Link to="/"><button className='btn-services'>Services</button></Link>

        <div className="socmed">
        <i className='bx bxl-facebook-circle'></i>
        <i className='bx bxs-envelope' ></i>
        <i className='bx bxs-phone' ></i> 
        </div>
      </main>
    </>
  );
}

export default Home;