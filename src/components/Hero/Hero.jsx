import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { LinkOffOutlined } from '@mui/icons-material';

const Hero= () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    <div>
        <LinkOffOutlined>Refer</LinkOffOutlined>
    </div>
      <div className="container mx-auto py-16 px-6 flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2">
          <Typography variant="h2" className="font-bold mb-4">Let’s Learn & Earn</Typography>
          <Typography variant="body1" className="mb-6">Get a chance to win up-to <span className="text-blue-600">Rs. 15,000</span></Typography>
          <Button variant="contained" className="bg-blue-600 text-white">Refer Now</Button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
          <img src="/Anniversary .png" alt="Hero" className="max-w-full h-auto relative z-10" />
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <img src="/Money.png" alt="Money" className="absolute top-0 left-0" />
            <img src="/Money.png" alt="Money" className="absolute top-0 right-0" />
            <img src="/Money.png" alt="Money" className="absolute bottom-0 left-0" />
            <img src="/Money.png" alt="Money" className="absolute bottom-0 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
