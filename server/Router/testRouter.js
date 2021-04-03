const router = require("express").Router();
const { accoutnSID, authToken, serviceSID } = require("../config/otp_auth")
const client = require("twilio")(accoutnSID, authToken);

router.post("/mobile", (req, res) => {
  console.log("number", req.body.number);
  client.verify
    .services(serviceSID)
    .verifications.create({
      to: `+91${req.body.number}`,
      channel: "sms",
    })
    .then((resp) => {
      console.log("response", resp);
      res.status(200).json(resp);
    });
});

router.post("/otp", (req, res) => {
  const { otp, userNumber } = req.body;
  console.log("otp ", otp);
  client.verify
    .services(serviceSID)
    .verificationChecks.create({
      to: userNumber,
      code: otp,
    })
    .then((resp) => {
      console.log("otp res", resp);
      if (resp.valid) {
        res.json({ resp, message: "Welcome" });
      }
      res.json({resp, message: "Expire Otp" });
    });
});

module.exports = router;
