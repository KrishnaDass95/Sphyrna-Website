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
import Aish from "../../media/team-members/11. Aishwarya.png"
import Bhagya from "../../media/team-members/12. Bhagyashree.png"

export const AboutComponent = () => {
  const team_obj = [
    {
      personName: "Mahboob Ali Khan",
      personTitle: "Founder & CEO",
      personDomain: null,
      imagePath: Ali
    },
    {
      personName: "Franklin Prince",
      personTitle: "Co-Founder & COO",
      personDomain: null,
      imagePath: Frank
    },
    {
      personName: "Krishna Dass",
      personTitle: "Senior Software Engineer",
      imagePath: Krishna
    },
    {
      personName: "Shruti Badhani",
      personTitle: "General Manager - Operations",
      imagePath: Shruti
    },
    {
      personName: "Ashish Kuttappa",
      personTitle: "Manager - Rider Experience",
      imagePath: Ashish
    },
    {
      personName: "Akhil Kalibhat",
      personTitle: "Manager - Rider Experience",
      imagePath: Akhil
    },
    {
      personName: "Hari Pulikode",
      personTitle: "Lead Software Expert",
      imagePath: Hari
    },
    {
      personName: "Abhishek Anand",
      personTitle: "Lead Hardware Expert",
      imagePath: Abhi
    },
    {
      personName: "Bijit Sinha",
      personTitle: "Sr. Rider Experience Engineer",
      imagePath: Bijit
    },
    {
      personName: "Vishnu Raghunandhan",
      personTitle: "Rider Experience Engineer",
      imagePath: Vishnu
    },
    {
      personName: "Aishwarya Chauhan",
      personTitle: "Rider Experience Engineer",
      imagePath: Aish
    },
    {
      personName: "Bhagyashree Samantray",
      personTitle: "Rider Experience Engineer",
      imagePath: Bhagya
    }
  ];
  return (
    <div className="input-wrapper about">
      <div className="header-text header-about">About Us</div>
      <div className="para-text about-para">
        Sphyrna is dedicated to empowering individuals and organizations to
        achieve excellence by delivering exceptional support.
      </div>
      <div className="para-text">
        Our vision is to be the reliable foundation upon which our users build
        their technological success.
      </div>

      <div className="header-text">Meet the Team</div>
      <div className="para-text">
        We have assembled a team of highly disciplined individuals committed to
        fostering a collaborative environment, providing expert guidance, and
        resolving challenges with speed and efficiency.
      </div>
      <div className="card-grid">
        {
          team_obj.map((member, index) => 
          (
            <TeamMemberCardComponent 
            key={index}
            Name={member.personName}
            Title={member.personTitle}
            imagePath={member.imagePath}
            />
          ))
        }
      </div>
    </div>
  );
};
