import { Box, Typography, Button, Container } from '@mui/material';
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
  <Box
    display="flex"
    flexDirection={{ xs: 'column', md: reverse ? 'row-reverse' : 'row' }}
    alignItems="center"
    mb={6}
    gap={{ xs: 3, md: 5 }}
    width="100%"
    sx={{
      px: { xs: 1, sm: 2, md: 0 },
    }}
  >
    <Box
      flex="1"
      textAlign={{
        xs: 'center',
        md: reverse ? 'right' : 'left',
      }}
      width={{ xs: '100%', md: '50%' }}
      mb={{ xs: 2, md: 0 }}
    >
      <Typography variant="h5" color="warning.main" fontWeight="bold" mb={2}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={2}>
        {description}
      </Typography>
      <Button variant="contained" color="warning">
        {buttonText}
      </Button>
    </Box>
    <Box
      flex="1"
      display="flex"
      justifyContent={{ xs: 'center', md: reverse ? 'flex-end' : 'flex-start' }}
      alignItems="center"
      width={{ xs: '100%', md: '50%' }}
    >
      <Box
        component="img"
        src={image}
        alt={`${title} Course Image`}
        sx={{
          width: { xs: '90vw', sm: 320, md: 380 },
          maxWidth: '100%',
          height: { xs: 180, sm: 220, md: 260 },
          objectFit: 'cover',
          borderRadius: 3,
          boxShadow: 2,
        }}
      />
    </Box>
  </Box>
);

const Training = () => {
  return (
    <Box component="section" py={5} bgcolor="background.default" id="training">
      <TrainingHero />
      <Container maxWidth="md">
        {trainingData.map((item, index) => (
          <TrainingSection key={index} {...item} />
        ))}
      </Container>
    </Box>
  );
};

export default Training;
