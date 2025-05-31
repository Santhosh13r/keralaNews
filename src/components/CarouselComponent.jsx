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
          <div className="carousel-item active">
            <img className="d-block w-100" src="src\assets\SratImg.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="src/assets/Events.png" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="src/assets/Tech.png" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="src/assets/Enterinment.png" alt="Fourth slide" />
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
