import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Container,
    Grid,
    useTheme,
    Fade,
} from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const services = [
    {
        title: 'Web Development',
        image: 'web-development.png',
        steps: [
            { title: 'Website Design and Development' },
            { title: 'E-commerce Integration' },
            { title: 'Website Maintenance' },
        ],
        route: '/web-design',
    },
    {
        title: 'Graphic & Design',
        image: 'graphic-design.png',
        steps: [
            { title: 'Branding & Logo Design' },
            { title: 'Print & Digital Design' },
            { title: 'Marketing Materials' },
        ],
        route: '/graphic-design',
    },
    {
        title: 'Social Media Management',
        image: 'social-media-management.png',
        steps: [
            { title: 'Content Strategy' },
            { title: 'Community Management' },
            { title: 'Analytics & Reporting' },
        ],
        route: '/social-media-management',
    },
];

const Services: React.FC = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <Box
            component="section"
            py={{ xs: 6, md: 10 }}
            sx={{
                bgcolor: theme.palette.background.default,
                backgroundImage: `url("accordion-bg01.png")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Container>
                <Box textAlign="center" mb={6}>
                    <Typography
                        variant="h2"
                        color="warning.main"
                        fontWeight={700}
                        gutterBottom
                        sx={{
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        }}
                    >
                        Our Core Services
                    </Typography>
                    <Divider
                        sx={{
                            width: 80,
                            mx: 'auto',
                            borderBottomWidth: 3,
                            borderColor: theme.palette.warning.main,
                            opacity: 0.8,
                            mb: 2,
                        }}
                    />
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ maxWidth: 600, mx: 'auto' }}
                    >
                        Comprehensive digital solutions tailored to boost your online presence.
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={service.title}>
                            <Fade in timeout={600 + index * 200}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: 4,
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        '&:hover': {
                                            transform: 'translateY(-8px) scale(1.03)',
                                            boxShadow: '0 16px 40px rgba(0,0,0,0.13)',
                                        },
                                        bgcolor: theme.palette.background.paper,
                                    }}
                                >
                                    {service.image && (
                                        <CardMedia
                                            component="img"
                                            image={service.image}
                                            alt={service.title}
                                            sx={{
                                                height: 160,
                                                objectFit: 'contain',
                                                borderRadius: '16px 16px 0 0',
                                                bgcolor: theme.palette.warning.light,
                                            }}
                                        />
                                    )}
                                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Typography
                                            variant="h6"
                                            color="warning.main"
                                            fontWeight={700}
                                            textAlign="center"
                                            gutterBottom
                                            sx={{ letterSpacing: 1 }}
                                        >
                                            {service.title}
                                        </Typography>
                                        <List dense>
                                            {service.steps.map((step, stepIndex) => (
                                                <ListItem key={stepIndex} disableGutters>
                                                    <ListItemIcon sx={{ minWidth: 32 }}>
                                                        <CheckCircleIcon color="warning" fontSize="small" />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={step.title}
                                                        primaryTypographyProps={{
                                                            color: 'text.secondary',
                                                            fontSize: '1rem',
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Box flexGrow={1} />
                                        <Button
                                            variant="contained"
                                            color="warning"
                                            sx={{
                                                mt: 3,
                                                borderRadius: 99,
                                                fontWeight: 600,
                                                textTransform: 'none',
                                                boxShadow: 'none',
                                                px: 4,
                                                alignSelf: 'center',
                                            }}
                                            onClick={() => navigate(service.route)}
                                        >
                                            Explore Service
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Fade>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;