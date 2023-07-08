const User = require('../models/user');

const generateResetToken = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const storeResetToken = async (email, token) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }
  user.passwordResetToken = token;
  await user.save();
};

const resetPassword = async (token, newPassword) => {
  const user = await User.findOne({ passwordResetToken: token });
  if (!user) {
    throw new Error('Invalid reset token');
  }
  user.password = newPassword;
  user.passwordResetToken = null;
  await user.save();
};

module.exports = {
  requestReset: async (email) => {
    const token = generateResetToken();
    await storeResetToken(email, token);
  },
  resetPassword
};