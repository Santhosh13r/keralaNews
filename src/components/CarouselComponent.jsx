import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; 


const CarouselComponent = () => {
  return (
    <div className="bg-light py-5 text-center">
      <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <img className="d-block w-100" src="keralaNews\src\assets\SratImg.png" alt="Start" />
            <span style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "4rem",
              color: "#fff",
              fontWeight: "bold",
              textShadow: "2px 2px 8px #000"
            }}>Top 1 News Gather from the news update </span>
          </div>
          <div className="carousel-item position-relative">
            <img className="d-block w-100" src="keralaNews\src\assets\Events.png" alt="Events" />
            <span style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "4rem",
              color: "#fff",
              fontWeight: "bold",
              textShadow: "2px 2px 8px #000"
            }}>Events update</span>
          </div>
          <div className="carousel-item position-relative">
            <img className="d-block w-100" src="keralaNews\src\assets\Tech.png" alt="Technology" />
            <span style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "4rem",
              color: "#fff",
              fontWeight: "bold",
              textShadow: "2px 2px 8px #000"
            }}>Technology News</span>
          </div>
          <div className="carousel-item position-relative">
            <img className="d-block w-100" src="src\assets\Enterinment.png" alt="Entertainment" />
            <span style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "4rem",
              color: "#fff",
              fontWeight: "bold",
              textShadow: "2px 2px 8px #000"
            }}>Enterinment News</span>
          </div>
        </div>

        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
};

export default CarouselComponent;
