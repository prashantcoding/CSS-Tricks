import { useEffect, useState } from "react"
import allen from "../../assets/allen_wake.avif";
import creed from "../../assets/creed.avif"; // Make sure the image file names match your actual file names
import hog from "../../assets/hog.avif";
import football from "../../assets/football.avif";
import "./Aslider.css"
export default function Aslider() {
    const [activeIndex, setActiveIndex] = useState(0)

    const slides = [
        { img: allen, name: "Alan Wake 2" },
        { img: football, name: "EA SPORTS FC 24" },
        { img: creed, name: "Assassin's creed Mirage" },
        { img: hog, name: "LORT: Return to Moria" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            document.querySelectorAll('.child')[activeIndex]?.classList.remove('active')
            const nextIndex = (activeIndex) % slides.length
            document.querySelectorAll('.child')[nextIndex]?.classList.add('active')
            setActiveIndex(nextIndex)
            console.log(nextIndex)
        }, 1000)
        return () => clearInterval(interval)
    }, [activeIndex])

    return (
        <section id="hero">

            <div className="content">
                {slides.map((item, index) => (
                    <div key={index} className={`image ${activeIndex === index ? 'active' : ''}`}>
                        <img src={item.img} alt={item.name} />
                    </div>
                ))}
            </div>
            <div style={{
                display: "grid"
            }}>
                {/* {slides.map((item, index) => (
          <button onClick={(e)=>setActiveIndex(index)}>{index+1}</button>
        ))} */}

                <div className="slider__navigation">
                    {slides.map((slide, index) => (
                        <div className="slider-nav-item" key={index }  onClick={(e)=>setActiveIndex(index)}>
                            <img className="nav--img" src={slide.img} ></img>
                            <p>{slide.name}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}