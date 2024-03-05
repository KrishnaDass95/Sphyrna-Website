import "./about.css";
import { TeamMemberCardComponent } from "../Team_Member_Card_Component";
import Ali from "../../media/team-members/1.Ali.png"
import Frank from "../../media/team-members/2.Frank.png"
import Shruti from "../../media/team-members/3.Shruti.png"
import Abhi from "../../media/team-members/7.Abhi.png"
import Akhil from "../../media/team-members/8.Akhil.png"
import Hari from "../../media/team-members/6.Hari.png"
import Vishnu from "../../media/team-members/10.Vishnu.png"
import Bijit from "../../media/team-members/9.Bijit.png"
import Ashish from "../../media/team-members/5.Ashish.png"
import Krishna from "../../media/team-members/4.Krishna.png"



export const AboutComponent = () => {
  const team_obj = [
    {
      personName: "Mahoob Ali Khan",
      personTitle: "Chief Executive Officer",
      personDomain: null,
      imagePath: Ali
    },
    {
      personName: "Franklin Prince",
      personTitle: "Chief Opearating Officer",
      personDomain: null,
      imagePath: Frank
    },
    {
      personName: "Shruti Badhani",
      personTitle: "General Manager",
      personDomain: null,
      imagePath: Shruti
    },
    {
      personName: "Ashish Kuttapa",
      personTitle: "Manager",
      personDomain: "Rider Experience",
      imagePath: Ashish
    },
    {
      personName: "Hari Pulikode",
      personTitle: "Lead Product Expert",
      personDomain: "Sotware",
      imagePath: Hari
    },
    {
      personName: "Abhishek Anand",
      personTitle: "Lead Product Expert",
      personDomain: "Hardware",
      imagePath: Abhi
    },
    {
      personName: "Akhil Khalibhat",
      personTitle: "Managar",
      personDomain: "Rider Experience",
      imagePath: Akhil
    },
    {
      personName: "Bijit Sinha",
      personTitle: "Senior Engineer",
      personDomain: "Rider Experience",
      imagePath: Bijit
    },
    {
      personName: "Vishnu Raghunandhan",
      personTitle: "Engineer",
      personDomain: "Rider Experience",
      imagePath: Vishnu
    },
    {
      personName: "Krishna Dass",
      personTitle: "Senior Engineer",
      personDomain: "Software",
      imagePath: Krishna
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
