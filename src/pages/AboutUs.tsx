import React from "react";
import AboutUsHeader from "../components/AboutUsHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faTiktok, faInstagram, faFacebook, faTelegram, faLinkedin, faSlack, faDiscord } from "@fortawesome/free-brands-svg-icons";

const AboutUs: React.FC = () => {
  return (
    <>
      <AboutUsHeader />
      <section className="container py-5">
        <div className="text-center mb-5">
          <header>
            <h2 className="text-warning fw-bold">About Us</h2>
            <p className="lead">
              Welcome to ByteCity Tech, where innovation and excellence converge. We are a dedicated team passionate about delivering top-tier services in web design, training, graphic design, branding, social media management, web administration, and consultancy.
            </p>
          </header>

          <section className="my-4">
            <h3 className="text-warning fw-bold">Our Mission</h3>
            <p className="lead">
              We aim to be a center of excellence, offering high-quality, innovative solutions that empower our clients to achieve their goals. By staying ahead of industry trends and continually refining our skills, we ensure the best possible service for every project.
            </p>
          </section>

          <section className="my-4">
            <h3 className="text-warning fw-bold">Our Services</h3>
            <div className="lead">
              <div className="my-3">
                <strong>Web Design:</strong> Creating visually appealing, user-friendly websites that communicate your brand’s story.
              </div>
              <div className="my-3">
                <strong>Training:</strong> Empowering individuals and teams with the skills necessary to thrive in the digital world.
              </div>
              <div className="my-3">
                <strong>Graphic and Design:</strong> Crafting striking visuals that reinforce your brand identity and engage your audience.
              </div>
              <div className="my-3">
                <strong>Branding:</strong> Developing holistic branding strategies that connect with your target market and elevate your business.
              </div>
              <div className="my-3">
                <strong>Social Media Management:</strong> Strategically growing your online presence with effective social media campaigns.
              </div>
              <div className="my-3">
                <strong>Web Administration:</strong> Ensuring your website runs flawlessly with expert web administration services.
              </div>
              <div className="my-3">
                <strong>Consultancy:</strong> Offering actionable insights and solutions to help you navigate the digital landscape.
              </div>
            </div>
          </section>

          <section className="my-4">
            <h3 className="text-warning fw-bold">Our Vision</h3>
            <p className="lead">
              Our vision is to be your go-to digital partner, recognized for our commitment to excellence and delivering exceptional results. We transform ideas into reality, aiming to exceed expectations with every project we undertake.
            </p>
            <p className="lead">
              Join us on our journey toward excellence, and let us help you achieve your digital goals. Together, we can create something extraordinary.
            </p>
          </section>

          {/* Social Media Icons */}
          <section className="my-4">
            <div className="text-center mt-5">
              <h2 className="fw-bold text-secondary mb-3">Connect with Us</h2>
              <div className="d-flex justify-content-center">
                {[ 
                  { href: 'https://wa.me/yourNumber', icon: faWhatsapp },
                  { href: 'https://www.tiktok.com/@yourUsername', icon: faTiktok },
                  { href: 'https://www.instagram.com/yourUsername', icon: faInstagram },
                  { href: 'https://www.facebook.com/yourUsername', icon: faFacebook },
                  { href: 'https://t.me/yourUsername', icon: faTelegram },
                  { href: 'https://www.linkedin.com/in/yourUsername', icon: faLinkedin },
                  { href: 'https://yourWorkspace.slack.com', icon: faSlack },
                  { href: 'https://discord.gg/yourInviteCode', icon: faDiscord }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="text-warning mx-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
