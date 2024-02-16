

export const TeamMemberCardComponent = ({Name, Title, Domain, About_Content }) => {

    return(
        <div class="person-card">
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
            <div class="person-content">
                {About_Content}
            </div>

        </div>
    )

}