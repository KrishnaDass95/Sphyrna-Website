import "./style.css"

export const TeamMemberCardComponent = ({Name, Title, Domain }) => {

    return(
        <div className="person-card">
            <div class="image">Image</div>
            <div class="person-name">
                {Name}
            </div>
            <div class="person-title">
                {Title}
            </div>
            <div class="person-domain">
                {Domain}
            </div>
        </div>
    )

}