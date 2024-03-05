import "./about.css";
import { TeamMemberCardComponent } from "../Team_Member_Card_Component";

export const AboutComponent = () => {
  const team_obj = [
    {
      personName: "Mahoob Ali Khan",
      personTitle: "Chief Executive Officer",
      personDomain: null,
      imagePath: "../../../media/team-members/1.Ali.png"
    },
    {
      personName: "Franklin Prince",
      personTitle: "Chief Opearating Officer",
      personDomain: null,
      imagePath: "../../../media/team-members/2.Frank.png"
    },
    {
      personName: "Shruti Badhani",
      personTitle: "General Manager",
      personDomain: null,
      imagePath: "../../../media/team-members/3.Shruti.png"
    },
    {
      personName: "Ashish Kuttapa",
      personTitle: "Manager",
      personDomain: "Rider Experience",
      imagePath: "../../../media/team-members/5.Ashish.png"
    },
    {
      personName: "Hari Pulikode",
      personTitle: "Lead Product Expert",
      personDomain: "Sotware",
      imagePath: "../../../media/team-members/6.Hari.png"
    },
    {
      personName: "Abhishek Anand",
      personTitle: "Lead Product Expert",
      personDomain: "Hardware",
      imagePath: "../../../media/team-members/7.Abhi.png"
    },
    {
      personName: "Akhil Khalibhat",
      personTitle: "Managar",
      personDomain: "Rider Experience",
      imagePath: "../../../media/team-members/8.Akhil.png"
    },
    {
      personName: "Bijit Sinha",
      personTitle: "Senior Engineer",
      personDomain: "Rider Experience",
      imagePath: "../../../media/team-members/9.Bijit.png"
    },
    {
      personName: "Vishnu Raghunandhan",
      personTitle: "Engineer",
      personDomain: "Rider Experience",
      imagePath: "../../../media/team-members/10.Vishnu.png"
    },
    {
      personName: "Krishna Dass",
      personTitle: "Senior Engineer",
      personDomain: "Software",
      imagePath: "../../../media/team-members/4.Krishna.png"
    }
  ];
  return (
    <div className="input-wrapper about">
      <div className="header-text">About Us</div>
      <div className="para-text">
        Sphyrna is dedicated to empowering individuals and organizations to
        achieve excellence by delivering exceptional support.
      </div>
      {/* <div className="para-text">
        We have assembled a team of highly disciplined individuals committed to
        fostering a collaborative environment, providing expert guidance, and
        resolving challenges with speed and efficiency.
      </div>
      <div className="para-text">
        Our vision is to be the reliable foundation upon which our users build
        their technological success.
      </div> */}
      <div className="card-grid">
        {
          team_obj.map((member, index) => 
          (
            <TeamMemberCardComponent 
            key={index}
            Name={member.personName}
            Title={member.personTitle}
            Domain={member.personDomain}
            imagePath={member.imagePath}
            />
          ))
        }
      </div>
    </div>
  );
};
