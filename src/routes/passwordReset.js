const express = require('express');
const passwordResetService = require('../services/passwordResetService');

const router = express.Router();

router.post('/request-reset', async (req, res) => {
  const { email } = req.body;
  try {
    await passwordResetService.requestReset(email);
    res.status(200).send('Password reset requested.');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put('/reset', async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    await passwordResetService.resetPassword(token, newPassword);
    res.status(200).send('Password reset successful.');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;