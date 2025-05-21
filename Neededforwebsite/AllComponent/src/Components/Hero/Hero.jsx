import "./hero.css";
function Hero() {
  return (
    <div className="hero flex  justify-center  bg-gradient-to-r  to-purple-500 text-white">
      <div className="hero__content">
        <h1 className="hero__title">Welcome to Our Website</h1>
        <p className="hero__description">Your one-stop solution for all your needs.</p>
        <button className="hero__button">Get Started</button>
      </div>
    </div>
  );
}
export default Hero;