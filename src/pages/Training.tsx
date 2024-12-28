import { Container, Row, Col, Button } from 'react-bootstrap';
import TrainingHero from '../components/TrainingHero';

const trainingData = [
  {
    title: 'Web Development',
    description:
      'Our Web Development course equips you with the skills to build modern, responsive websites and web applications. You’ll learn to use cutting-edge technologies such as React, TypeScript, and Node.js. Additionally, we focus on content management systems (CMS) like Strapi to help you manage dynamic content efficiently. This course is perfect for those who want to master the tools to create robust and scalable websites.',
    image: 'web-development.png',
    buttonText: 'Join a Class',
    reverse: false,
  },
  {
    title: 'Graphic Design',
    description:
      'Master the art of graphic design and unleash your creativity using the Adobe Creative Suite. Learn to design world-class branding materials, including logos, business cards, and brochures, while exploring advanced tools in Photoshop, Illustrator, and InDesign. This course is perfect for individuals who want to create visually compelling designs for digital and print media and build a distinctive brand identity.',
    image: 'graphic-design.png',
    buttonText: 'Register for the Course',
    reverse: true,
  },
  {
    title: 'Python Data Analysis',
    description:
      'Dive into the world of data with our Python Data Analysis course. Learn how to manipulate and analyze large datasets using powerful frameworks such as Pandas, NumPy, and Matplotlib. Whether you want to create visualizations, generate insights, or prepare data for machine learning, this course will provide you with the skills to succeed.',
    image: 'python-data-analysis.png',
    buttonText: 'Join a Class',
    reverse: false,
  },
  {
    title: 'Intro to Photography and Videography',
    description:
      'Our Intro to Photography and Videography course will teach you the fundamental skills needed to capture stunning images and videos. Learn how to use a camera effectively, compose beautiful shots, and edit your photos and videos with the latest software. This course is ideal for beginners looking to get into photography and videography or enhance their existing skills.',
    image: 'photography-videography.jpg',
    buttonText: 'Join a Class',
    reverse: true,
  },
  {
    title: 'Professional Writing',
    description:
      'Our Professional Writing course covers essential skills for effective communication in a corporate environment. You will learn to craft internal corporate communications, legal documents, business reports, policies, speeches, and scripts. This course is designed for professionals looking to enhance their writing skills and ensure clarity and professionalism in their written communications.',
    image: 'professional-writing.jpg',
    buttonText: 'Enroll Now',
    reverse: false,
  },
];

const TrainingSection = ({
  title,
  description,
  image,
  buttonText,
  reverse,
}: {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  reverse: boolean;
}) => (
  <Row
    className={`align-items-center mb-5 ${reverse ? 'flex-lg-row-reverse' : ''}`}
    style={{ rowGap: '20px' }}
  >
    <Col lg={6} md={12} className="text-center text-lg-start px-3">
      <h3 className="text-warning fw-bold mb-3">{title}</h3>
      <p className="text-muted">{description}</p>
      <Button variant="warning" className="mt-3">
        {buttonText}
      </Button>
    </Col>
    <Col lg={6} md={12} className="d-flex justify-content-center px-3">
      <img
        src={image}
        alt={`${title} Course Image`}
        className="img-fluid rounded"
        style={{ maxHeight: '350px', objectFit: 'cover' }}
      />
    </Col>
  </Row>
);

const Training = () => {
  return (
    <section className="training py-5 bg-light my-5" id="training">
      <TrainingHero />
      <Container className="py-4">
        {trainingData.map((item, index) => (
          <TrainingSection key={index} {...item} />
        ))}
      </Container>
    </section>
  );
};

export default Training;
