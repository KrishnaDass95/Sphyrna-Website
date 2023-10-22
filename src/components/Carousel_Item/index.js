

export const CarouselItem = ({title, src, desc }) => {

    return (
        <div className="carousel-item">
            <div className="header-text">{title}</div>
            <img src={src.default} alt={desc} />
            <div className="para-text">{desc}</div>
            
        </div>
    )
}