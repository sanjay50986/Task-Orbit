import nodemailer from "nodemailer";

export const sendEmail = async (email, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text: message,
  });
};

export const inviteMemberEmail = async (to, workspaceName, inviteLink) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `Task Orbit" <${process.env.EMAIL_USER}>`,
      to,
      subject: `Invitation to join ${workspaceName}`,
      html: `
           <h2>You’ve been invited to join <b>${workspaceName}</b></h2>
           <p>Click the link below to accept the invitation:</p>
           <a href="${inviteLink}" target="_blank">${inviteLink}</a>
         `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};
