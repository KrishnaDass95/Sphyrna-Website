import "./about.css";
import { TeamMemberCardComponent } from "../Team_Member_Card_Component";

export const AboutComponent = () => {
  const team_obj = [
    {
      personName: "Mahoob Ali Khan",
      personTitle: "Chief Executive Officer",
      personDomain: null,
    },
    {
      personName: "Franklin Prince",
      personTitle: "Chief Opearating Officer",
      personDomain: null,
    },
    {
      personName: "Shruti Badhani",
      personTitle: "General Manager",
      personDomain: null,
    },
    {
      personName: "Ashish Kuttapa",
      personTitle: "Manager",
      personDomain: "Rider Experience",
    },
    {
      personName: "Hari Pulikode",
      personTitle: "Lead Product Expert",
      personDomain: "Sotware"
    },
    {
      personName: "Abhishek Anand",
      personTitle: "Lead Product Expert",
      personDomain: "Hardware"
    },
    {
      personName: "Akhil Khalibhat",
      personTitle: "Managar",
      personDomain: "Rider Experience"
    },
    {
      personName: "Bijit Sinha",
      personTitle: "Senior Engineer",
      personDomain: "Rider Experience"
    },
    {
      personName: "Vishnu Raghunandhan",
      personTitle: "Engineer",
      personDomain: "Rider Experience"
    },
    {
      personName: "Krishna Dass",
      personTitle: "Senior Engineer",
      personDomain: "Software"
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
      <div className="card-grid">
        {
          team_obj.map((member, index) => 
          (
            <TeamMemberCardComponent 
            key={index}
            Name={member.personName}
            Title={member.personTitle}
            Domain={member.personDomain}
            />
          ))
        }
      </div>
    </div>
  );
};
