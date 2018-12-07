const nodemailer = require("nodemailer");

// Should be secure - DO NOT SHARE
const clientId = "1056163774806-6e1dqmju5n83jb36hjs5jcruvheh7uar.apps.googleusercontent.com";
const refreshToken = "1/eOmS1xTYg_SSb5vXtD8dIy9OldCa1lvyPyleJa8MYsY";

exports.handler = function (event, contect, callback) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "dylanwidjajaserver@gmail.com",
            clientId,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken,
        },
    });

    const body = JSON.parse(event.body);
    const mailOptions = {
        to: 'dwidjaja945@gmail.com',
        subject: `New Website Message from ${body.name}`,
        text: `Sender Name: ${body.name}, Sender Email: ${body.email}, Sender Message: ${body.message}`,
        html: null, // Optional to make html email
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("error:", error);
            callback(null, {
                statusCode: 500,
                body: JSON.stringify(error),
            });
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(info.response),
            })
        }
    });
}