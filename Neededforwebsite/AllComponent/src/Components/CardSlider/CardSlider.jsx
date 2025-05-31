import { useEffect, useState } from "react"
import { FaCaretSquareLeft ,FaCaretSquareRight } from "react-icons/fa";
import "./CardSlider.css"
function CardSlider({cardDetails}){
    const[currentIndex,setCurrentIndex]=useState(0);
    const[isTransition,setIsTransition]=useState(true);
    const cardSlides = [...cardDetails, ...cardDetails.slice(0, 4)];
    useEffect(()=>{
        const itrvl=setInterval(()=>{
            setCurrentIndex(prev=>prev+1)
        },2000)
        return ()=>clearInterval(itrvl)
        
    },[cardDetails.length])

    useEffect(()=>{
        if(currentIndex>=cardDetails.length+1){
                setIsTransition(false);
                setCurrentIndex(0);
                setTimeout(()=>setIsTransition(true),50)
        }
       
    },[cardSlides.length,currentIndex])
return(
    <div className="cardSlider-container">
        <button className="prevButton" onClick={()=>setCurrentIndex((prev=>prev-1))}><FaCaretSquareLeft/></button>
        <h1 className="game-title">GAME SLIDER</h1>
        <div className="cardslider flex" style={{transform:`translateX(-${currentIndex*25}%)`,transition: isTransition ? 'transform 500ms ease-in-out' : 'none'}}>
            
            {cardSlides.map((cardDetail,index)=>(
                <div className="card" key={index}>
                    <div className="card-header">
                        <img src={cardDetail.url} alt="" />
                    </div>
                    <div className="card-title"><h2>{cardDetail.name}</h2></div>
                    <div className="card-body">
                        <p className="px-4">{cardDetail.about}</p>
                    </div>
                </div>
            ))}
        </div>
        <button className="nextButton" onClick={()=>setCurrentIndex((prev=>prev+1))}><FaCaretSquareRight /></button>
    </div>
)
}
export default CardSlider