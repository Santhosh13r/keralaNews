
import '../index.css' // Create this CSS file for animation

const Ads = () => {
  return (
    <div className="my-3 text-center overflow-hidden" style={{ maxWidth: "728px", margin: "0 auto" }}>
      <img
        src="src\assets\SratImg.png" // Replace with your ad image path
        alt="Advertisement"
        className="sliding-ad"
        style={{
          width: "100%",
          height: "120px",
          objectFit: "cover",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
        }}
      />
    </div>
  )
}

export default Ads