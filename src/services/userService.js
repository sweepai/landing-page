const passwordResetService = require('./passwordResetService');

const requestPasswordReset = async (email) => {
  await passwordResetService.requestReset(email);
};

const resetPassword = async (token, newPassword) => {
  await passwordResetService.resetPassword(token, newPassword);
};

module.exports = {
  requestPasswordReset,
  resetPassword
};