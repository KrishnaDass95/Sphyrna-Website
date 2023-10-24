import "./carousel_item.css"

export const CarouselItem = ({title, src, desc }) => {

    return (
        <div className="carousel-item">
            <div className="secondary-header-text">{title}</div>
            <img className="image-services" src={src.default} alt={desc} />
            <div className="para-text">{desc}</div>
            
        </div>
    )
}