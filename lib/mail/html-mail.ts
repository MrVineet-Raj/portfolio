const generateCustomerHTML = (name: string) => {
  const html = `<body
  style="
    margin: 0;
    padding: 0;
    background: #f6f8fa;
    color: #23272f;
    font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
  "
>
  <div
    style="
      max-width: 640px;
      margin: 40px auto;
      background: #fff;
      border-radius: 18px;
      box-shadow: 0 6px 32px rgba(0, 21, 209, 0.09);
      overflow: hidden;
    "
  >
    <header
      style="
        background: linear-gradient(90deg, #0015d1 60%, #3a47d5 100%);
        color: #fff;
        padding: 36px 0 24px 0;
        text-align: center;
      "
    >
      <h1
        style="
          margin: 0;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -1px;
        "
      >
        Thank You for Reaching Out!
      </h1>
      <p
        style="
          margin: 10px 0 0 0;
          font-size: 1.1rem;
          font-weight: 400;
          opacity: 0.92;
        "
      >
        Your interest means a lot to me.
      </p>
    </header>
    <main style="padding: 38px 36px 28px 36px">
      <p style="margin-top: 0">
        Hi <span style="color: #0015d1; font-weight: 600">${name}</span>,
      </p>
      <p>
        I appreciate you taking the time to connect. I’m
        <strong style="color: #0015d1">Vineet Raj</strong>, a passionate
        developer dedicated to building impactful digital solutions.
      </p>
      <p>
        I’ll review your message and get back to you as soon as possible. In the
        meantime, feel free to explore my work or connect with me directly.
      </p>
      <div style="margin: 30px 0 24px 0; text-align: center">
        <a
          href="https://www.linkedin.com/in/mrvineetraj"
          target="_blank"
          style="
            display: inline-block;
            padding: 12px 32px;
            background: #0015d1;
            color: #fff;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 500;
            margin-right: 10px;
            box-shadow: 0 2px 8px rgba(0, 21, 209, 0.07);
            transition: background 0.2s;
          "
        >
          LinkedIn
        </a>
        <a
          href="mailto:vineetrajrj26@gmail.com"
          style="
            display: inline-block;
            padding: 12px 32px;
            background: #fff;
            color: #0015d1;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 500;
            border: 1.5px solid #0015d1;
            transition: background 0.2s;
          "
        >
          Email Me
        </a>
        <a
          href="https://unknownbug.tech"
          target="_blank"
          style="
            display: inline-block;
            padding: 12px 32px;
            background: #f6f8fa;
            color: #0015d1;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 500;
            border: 1.5px solid #0015d1;
            margin-left: 10px;
          "
        >
          Portfolio
        </a>
      </div>
      <blockquote
        style="
          margin: 0 0 18px 0;
          padding: 18px 24px;
          background: #f4f6fa;
          border-left: 4px solid #0015d1;
          border-radius: 8px;
          font-style: italic;
          color: #444;
        "
      >
        “Great things are done by a series of small things brought together.”<br />
        <span style="font-size: 0.95em; color: #888">– Vincent Van Gogh</span>
      </blockquote>
      <p style="margin-bottom: 0">
        Looking forward to connecting!<br />
        <span style="color: #0015d1; font-weight: 600">Vineet Raj</span>
      </p>
    </main>
    <footer
      style="
        background: #f4f6fa;
        padding: 16px 36px;
        font-size: 13px;
        color: #888;
        text-align: center;
        border-top: 1px solid #e5e7eb;
      "
    >
      <p style="margin: 0 0 4px 0">
        If you received this in error, please ignore it.
      </p>
      <p style="margin: 0">
        <em>This is an automated message. Please do not reply.</em>
      </p>
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
  const html = `<body style="margin:0;padding:0;background:#f6f8fa;color:#23272f;font-family:'Poppins',Tahoma,Geneva,Verdana,sans-serif;">
  <div style="max-width:640px;margin:40px auto;background:#fff;border-radius:16px;box-shadow:0 6px 32px rgba(0,21,209,0.09);overflow:hidden;">
    <header style="background:linear-gradient(90deg,#0015d1 60%,#3a47d5 100%);color:#fff;padding:32px 0 20px 0;text-align:center;">
      <h1 style="margin:0;font-size:2rem;font-weight:700;letter-spacing:-1px;">New Inquiry Received</h1>
      <div style="font-size:1.1rem;font-weight:400;margin-top:8px;opacity:0.92;">A potential client has reached out to you</div>
    </header>
    <main style="padding:36px 40px 28px 40px;font-size:16px;line-height:1.7;">
      <p style="margin-top:0;">Hello,</p>
      <p>
        <strong style="color:#0015d1;">${name}</strong> has contacted you regarding a project or opportunity.
      </p>
      <div style="background:#f4f6fa;border-left:4px solid #0015d1;padding:18px 22px;border-radius:8px;margin:22px 0 18px 0;">
        <strong>Message:</strong><br>
        <span style="color:#444;">${message}</span>
      </div>
      <p>
        You can reply directly to the sender using the button below:
      </p>
      <div style="margin: 24px 0;text-align:center;">
        <a
          href="mailto:${email}"
          style="
            display:inline-block;
            padding:12px 32px;
            background:#0015d1;
            color:#fff;
            text-decoration:none;
            border-radius:8px;
            font-weight:500;
            font-size:1rem;
            box-shadow:0 2px 8px rgba(0,21,209,0.07);
            transition:background 0.2s;
          "
        >
          Reply via Email
        </a>
      </div>
      <p style="margin-top:30px;">
        Thank you for your attention.<br>
        <span style="color:#0015d1;font-weight:600;">Vineet Raj</span>
      </p>
    </main>
    <footer style="background:#f4f6fa;padding:16px 40px;font-size:13px;color:#888;text-align:center;border-top:1px solid #e5e7eb;">
      <p style="margin:0 0 4px 0;">If you are not the intended recipient, please disregard this message.</p>
      <p style="margin:0;"><em>This is an automated notification. Please do not reply directly to this email.</em></p>
      <div style="margin-top:10px;font-size:12px;opacity:0.7;">
        <a href="https://unknownbug.tech" style="color:#0015d1;text-decoration:none;font-weight:500;">unknownbug.tech</a>
      </div>
    </footer>
  </div>
</body>`;

  return html;
};

export { generateCustomerHTML, generatePersonalMailHTML };
