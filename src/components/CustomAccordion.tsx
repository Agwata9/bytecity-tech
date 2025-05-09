import React from 'react';
import {
    Box,
    Typography,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useTheme,
    Paper,
    Stack,
    CardMedia
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Step {
    title: string;
    content: string;
    image: string;
}

const steps: Step[] = [
    {
        title: 'Step 1: Share Your Vision',
        content: 'Tell us about your idea and the project you have in mind. If possible, provide a sketch or any reference material to help us understand your concept better.',
        image: 'step1-placeholder.gif'
    },
    {
        title: 'Step 2: Collaborate and Review',
        content: 'We bring your idea to life, creating a design tailored to your needs. Your feedback helps us make adjustments to ensure perfection.',
        image: 'step2-placeholder.gif'
    },
    {
        title: 'Step 3: Final Delivery',
        content: 'We deliver the completed work in your preferred format—whether digital files, printed versions, or both.',
        image: 'step3-placeholder.png'
    }
];

const CustomAccordion: React.FC = () => {
    const theme = useTheme();
    const [expanded, setExpanded] = React.useState<number | false>(0);

    const handleChange = (panel: number) => (
        _event: React.SyntheticEvent,
        isExpanded: boolean
    ) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Paper
            component="section"
            elevation={0}
            sx={{
                py: { xs: 4, md: 5 },
                bgcolor: theme.palette.warning.light,
                backgroundImage: `url("accordion-bg.png")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'none'
            }}
        >
            <Box textAlign="center" mb={{ xs: 4, md: 5 }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="warning.main"
                    mb={2}
                >
                    Our Process
                </Typography>
                <Box display="flex" justifyContent="center" mb={3}>
                    <Divider
                        sx={{
                            width: { xs: '60%', sm: '40%' },
                            borderBottomWidth: 3,
                            borderColor: 'warning.main',
                            opacity: 0.75
                        }}
                    />
                </Box>
            </Box>

            <Stack
                spacing={3}
                sx={{
                    width: { xs: '100%', sm: '80%', md: '60%' },
                    mx: 'auto',
                    px: { xs: 1, sm: 2 }
                }}
            >
                {steps.map((step, index) => (
                    <Accordion
                        key={index}
                        expanded={expanded === index}
                        onChange={handleChange(index)}
                        sx={{
                            borderRadius: 2,
                            bgcolor: theme.palette.background.paper,
                            boxShadow: expanded === index ? 4 : 1,
                            transition: 'box-shadow 0.2s',
                            '&:before': { display: 'none' }
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="warning" />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            sx={{
                                alignItems: 'center',
                                gap: 2
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={step.image}
                                alt={step.title}
                                sx={{
                                    width: 56,
                                    height: 56,
                                    objectFit: 'contain',
                                    bgcolor: theme.palette.warning.light,
                                    borderRadius: 2,
                                    mr: 2
                                }}
                            />
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                color="warning.main"
                            >
                                {step.title}
                            </Typography>
                            <Box flexGrow={1} />
                            <Typography
                                variant="subtitle1"
                                color="warning.main"
                                fontWeight="bold"
                                sx={{ minWidth: 32, textAlign: 'right' }}
                            >
                                0{index + 1}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="body2"
                                color={theme.palette.warning.dark}
                                sx={{ px: { xs: 0, sm: 2 } }}
                            >
                                {step.content}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Stack>
        </Paper>
    );
};

export default CustomAccordion;