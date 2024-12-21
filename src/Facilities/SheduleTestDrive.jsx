import { Link } from 'react-router-dom';
import React from 'react';

const ScheduleTestDrive = () => {
  return (
    <Link 
    to="/models"
      className="bg-white text-black border-2 border-black py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
    >
      Schedule Test Drive
    </Link>
  );
};

export default ScheduleTestDrive;
