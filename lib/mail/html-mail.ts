const generateCustomerHTML = (name: string) => {
  const html = `
 <body
  style="
    font-family: Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
  "
>
  <div style="max-width: 700px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
    <header
      style="
        background-color: #0015d1;
        color: white;
        padding: 30px 20px;
        text-align: center;
        font-size: 24px;
      "
    >
      Hello, ${name}
    </header>

    <main style="padding: 30px 40px; font-size: 16px; line-height: 1.6;">
      <p>
        I hope this message finds you well.
      </p>

      <p>
        My name is <strong>Vineet Raj</strong>, and I would like to express my sincere appreciation for considering me for this opportunity. I am truly grateful for your interest, and I am committed to delivering work that not only meets but exceeds your expectations.
      </p>

      <p>
        I will be reaching out shortly to initiate further discussions.
      </p>

      <p>
        <em>If you would like to connect with me in the meantime, please feel free to use the links below:</em>
      </p>

      <div style="margin: 20px 0;">
        <a
          href="https://www.linkedin.com/in/mrvineetraj"
          style="
            display: inline-block;
            padding: 10px 20px;
            background-color: #0015d1;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            margin-right: 10px;
          "
          target="_blank"
        >
          Connect on LinkedIn
        </a>
        <a
          href="mailto:vineetrajrj26@gmail.com"
          style="
            display: inline-block;
            padding: 10px 20px;
            background-color: #0015d1;
            color: white;
            text-decoration: none;
            border-radius: 6px;
          "
        >
          Send an Email
        </a>
      </div>

      <p>
        Thank you once again for your time and consideration.
        <br /><br />
        Best regards,<br />
        <strong>Vineet Raj</strong>
      </p>
    </main>

    <footer style="padding: 20px 40px; font-size: 12px; color: #777; text-align: center;">
      <p>If you have received this email in error, please disregard it.</p>
      <p><em>This is an automated message. Please do not reply to this email.</em></p>
    </footer>
  </div>
</body>

 `;
  return html;
};

const generatePersonalMailHTML = (
  name: string,
  message: string,
  email: string
) => {
  const html = `
   <body
  style="
    font-family: Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
  "
>
  <div style="max-width: 700px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
    <header
      style="
        background-color: #0015d1;
        color: white;
        padding: 30px 20px;
        text-align: center;
        font-size: 24px;
      "
    >
      You Have a New Customer
    </header>

    <main style="padding: 30px 40px; font-size: 16px; line-height: 1.6;">
      <p>
        Hello,
      </p>

      <p>
        You’ve been approached by <strong>${name}</strong> regarding a task or job opportunity.
      </p>

      <p>
        <strong>Message:</strong><br />
        ${message}
      </p>

      <p>
        I will be connecting with you soon to coordinate further.
      </p>

      <p>
        <em>If you would like to respond directly, you may contact the sender using the link below:</em>
      </p>

      <div style="margin: 20px 0;">
        <a
          href="mailto:${email}"
          style="
            display: inline-block;
            padding: 10px 20px;
            background-color: #0015d1;
            color: white;
            text-decoration: none;
            border-radius: 6px;
          "
        >
          Contact via Email
        </a>
      </div>

      <p style="margin-top: 30px;">
        Thank you.<br />
        Best regards,<br />
        <strong>Vineet Raj</strong>
      </p>
    </main>

    <footer style="padding: 20px 40px; font-size: 12px; color: #777; text-align: center;">
      <p>If you are not the intended recipient, please disregard this message.</p>
      <p><em>This is an automated message. Please do not reply directly to this email.</em></p>
    </footer>
  </div>
</body>

  `;

  return html;
};

export { generateCustomerHTML, generatePersonalMailHTML };
