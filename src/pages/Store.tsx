import React from 'react';
import { Box, Alert, AlertTitle, Typography, Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const Store: React.FC = () => {
    return (
        <Box 
            sx={{ 
                textAlign: 'center', 
                mt: 5, 
                pt: '100px' 
            }}
        >
            {/* Alert Box */}
            <Alert 
                severity="warning" 
                icon={<ConstructionIcon fontSize="large" />} 
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    borderRadius: 2, 
                    p: 3 
                }}
            >
                <Box>
                    <AlertTitle sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Page Under Construction</AlertTitle>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        We're working hard to bring this page to you. Stay tuned!
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        Thanks for your patience!
                    </Typography>
                </Box>
            </Alert>

            {/* Image */}
            <Box 
                component="img" 
                src="under-construction.png" 
                alt="Under Construction" 
                sx={{ 
                    mt: 4, 
                    maxWidth: '300px', 
                    borderRadius: 2, 
                    boxShadow: 3 
                }} 
            />

            {/* Call to Action Button */}
            <Box sx={{ mt: 4 }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    href="/"
                >
                    Return to Home
                </Button>
            </Box>
        </Box>
    );
};

export default Store;
