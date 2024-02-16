import "./about.css";
import { TeamMemberCardComponent } from "../Team_Member_Card_Component";

export const AboutComponent = () => {
  const team_obj = [
    {
      personName: "Mahoob Ali Khan",
      personTitle: "Chief Executive Officer",
      personDomain: null,
      personContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
    {
      personName: "Franklin Prince",
      personTitle: "Chief Opearating Officer",
      personDomain: null,
      personContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
    {
      personName: "Shruti Badhani",
      personTitle: "General Manager",
      personDomain: null,
      personContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
    {
      personName: "Ashish Kuttapa",
      personTitle: "Team Manager",
      personDomain: "Rider Experience",
      personContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
    {
      personName: "Hari Pulikode",
      personTitle: "Lead Product Expert",
      personDomain: "Sotware",
      personContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    }
  ];
  return (
    <div className="input-wrapper about">
      <div className="header-text">About Us</div>
      <div className="para-text">
        Sphyrna is dedicated to empowering individuals and organizations to
        achieve excellence by delivering exceptional support.
      </div>
      <div className="para-text">
        We have assembled a team of highly disciplined individuals committed to
        fostering a collaborative environment, providing expert guidance, and
        resolving challenges with speed and efficiency.
      </div>
      <div className="para-text">
        Our vision is to be the reliable foundation upon which our users build
        their technological success.
      </div>
      <div class="card-grid">
        {
          team_obj.map((member, index) => 
          (
            <TeamMemberCardComponent 
            key={index}
            Name={member.personName}
            Title={member.personTitle}
            Domain={member.personDomain}
            About_Content={member.personContent}
            />
          ))

        }
      </div>
    </div>
  );
};
