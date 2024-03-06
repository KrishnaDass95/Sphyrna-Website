import "./style.css"
import { Image } from "../common_components/Images"
export const TeamMemberCardComponent = ({Name, Title, imagePath }) => {

    return(
        <div className="person-card">
            <div className="image">
                <Image src={imagePath} alt={Name}/>
            </div>
            <div className="card-text-content">
            <div className="person-name">
                {Name}
            </div>
            <div className="person-title">
                {Title}
            </div>
            </div>
            
        </div>
    )

}