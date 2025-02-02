import React from "react";
import AboutUsHeader from "../components/AboutUsHeader";

// Team Member Card Component
const TeamMemberCard: React.FC<{ member: { image: string, name: string, profession: string, bio: string } }> = ({ member }) => (
  <div className="col" key={member.name}>
    <div className="card h-100 shadow-sm text-center">
      <img
        src={member.image}
        alt={`Image of ${member.name}`}
        className="card-img-top rounded-circle mx-auto mt-3"
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h5 className="card-title mt-3 text-warning">{member.name}</h5>
        <p className="text-muted fst-italic">{member.profession}</p>
        <p
          className="card-text"
          style={{
            maxHeight: "100px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {member.bio}
        </p>
      </div>
    </div>
  </div>
);

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      image: "/aboutUs/agwata-image.jpg",
      name: "Agwata",
      profession: "Co-Founder and Tech Strategist",
      bio: 'Agwata is a skilled professional in web design, social media management, virtual assistance, Graphics & Design, and Python programming. Certified in AWS, Ethical Hacking, and Software Engineering, Agwata excels in online campaigns, brand visibility, and ICT consultancy, offering a well-rounded approach to tech and digital marketing.',
    },
    {
      image: "/aboutUs/dee-image1.jpg",
      name: "Dolphine",
      profession: "Designer and Creative Visionary",
      bio: `Dolphine is a certified Adobe designer with over 5 years of professional experience in branding, designing, printing, and signage. She specializes in crafting logos, building brand identities, and creating captivating promotional materials.`,
    },
    {
      image: "/aboutUs/athanus-image.jpg",
      name: "Athanus",
      profession: "Professional Writer, Blogger, and Trainer",
      bio: `Athanus is an experienced writer and professional blogger with a passion for storytelling and technical accuracy. He is also a seasoned trainer in professional writing, helping clients articulate their ideas effectively.`,
    },
    {
      image: "/aboutUs/clinton-image.jpg",
      name: "Clinton",
      profession: "Professional Photographer and Content Creator",
      bio: `Clinton is a Grammy award-winning photographer with three accolades. A professional TikToker and Instagram content creator, he captures moments that resonate globally.`,
    },
    {
      image: "/aboutUs/victor-image.jpg",
      name: "Victor",
      profession: "Graphic Designer and Trainer",
      bio: `Victor is a seasoned graphic designer with years of experience in creating impactful visuals. He is also a dedicated trainer mentoring aspiring designers.`,
    },
    {
      image: "/aboutUs/agripa-image1.jpg",
      name: "Agripa",
      profession: `Social Media Manager, Virtual Assistant, Business Branding & Customer Support Specialist`,
      bio: `Agripa is a multifaceted professional specializing in social media management, virtual assistance, and customer support. As a team manager, Agripa ensures smooth operations while delivering exceptional branding experiences.`,
    },
  ];

  return (
    <>
      <AboutUsHeader />
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="text-warning fw-bold">Meet Our Team</h2>
          <p className="lead">
            Our team of experts is dedicated to delivering innovative and
            effective solutions for all your technology needs.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {teamMembers.map((member) => (
            <TeamMemberCard member={member} key={member.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
