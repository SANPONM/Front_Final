//utils/email
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Настройка транспорта для Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Gmail SMTP сервис
  auth: {
    user: process.env.EMAIL_USER,  
    pass: process.env.EMAIL_PASS,  
  },
});

// Функция для отправки email с кодом сброса пароля
export const sendResetEmail = async (email, resetCode) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: email,
    subject: 'Password Reset Code',  // Тема письма
    text: `Your password reset code is: ${resetCode}`, 
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Reset email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send reset email');
  }
};

export const sendTestDriveConfirmation = (email, status) => {
  const subject = status === 'approved' ? 'Test Drive Approved' : 'Test Drive Rejected';
  const message = status === 'approved' 
    ? 'Your test drive request has been approved. Please come between 9:00 AM and 8:00 PM.'
    : 'Sorry, your test drive request has been rejected.';

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};
