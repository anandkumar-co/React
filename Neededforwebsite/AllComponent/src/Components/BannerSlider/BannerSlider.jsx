import { useEffect, useState } from "react";
import "./Bannerslider.css"
function BannerSlider(props) {
    const { urls } = props;
    const[current, setCurrent]=useState(0);
    const [transitioning,setTransitioning]=useState(true);
    const slides=[...urls,urls[0]]
    useEffect(() => {
        if (urls.length === 0) return;
        const interval = setInterval(() => {
            setCurrent(prev => prev + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, [urls.length]);

    
    useEffect(() => {
        if (current === slides.length - 1) {
            const timer = setTimeout(() => {
                setTransitioning(false);
                setCurrent(0);
                // Re-enable transition after reset
                setTimeout(() => setTransitioning(true), 100);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [current, slides.length]);

    return (
        <div className="banner-slider">
            {slides.map((url, idx) => (
                <div className="slider flex align-center justify-center" key={idx} style={{ transform: `translateX(-${current * 100}%)`, 
                transition: transitioning ? 'transform 500ms ease' : 'none',
                backgroundImage:`url(${url})`}}>
                   <h1></h1>
                   <span></span>
                </div>
            ))}
        </div>
    );
}

export default BannerSlider;