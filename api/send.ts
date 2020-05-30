import dotenv from "dotenv";
import { NowRequest, NowResponse } from "@now/node";
var postmark = require("postmark");

dotenv.config();

var client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

export default (req: NowRequest, res: NowResponse) => {
  const { company, contact, message, name } = JSON.parse(req.body);

  client
    .sendEmail({
      From: "no-reply@vci.industries",
      To: process.env.CLIENT_EMAIL,
      Subject: "Website Contact Form",
      HtmlBody: `
        <p>${name || "no name"} of ${company || "no company"} says:</p>
        <p>${message || "no message"}</p>
        <p>Reply to: ${contact || "no contact"}</p>
        `,
      TrackOpens: true,
    })
    .then(() => res.status(200).end())
    .catch((error: Error) => res.status(400).end(JSON.parse(error.message)));
};
