const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});

const sendPasswordResetEmail = async (email, token) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Password Reset Request',
    text: `You have requested to reset your password. Please use the following token to reset your password: ${token}`
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendPasswordResetEmail
};