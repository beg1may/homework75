import { Router } from 'express';
const Vigenere = require("caesar-salad").Vigenere;

const messageRouter = Router();

messageRouter.post('/encode', (req, res) => {
  try {
    const { password, message } = req.body;
    const messageEncoded = Vigenere.Cipher(password).crypt(message);
    res.send(`encoded: ${messageEncoded}`);
  } catch (e) {
    res.json(e);
  }
});

messageRouter.post('/decode', (req, res) => {
  try {
    const { password, message } = req.body;
    const messageDecoded = Vigenere.Decipher(password).crypt(message);
    res.send(`decoded:${messageDecoded}`);
  } catch (e) {
    res.json(e);
  }
});

export default messageRouter;
