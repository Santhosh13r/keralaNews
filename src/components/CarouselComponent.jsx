
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; 


const CarouselComponent = () => {
  return (
    <div className="bg-light py-5 text-center">
      <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
        </ol>

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
