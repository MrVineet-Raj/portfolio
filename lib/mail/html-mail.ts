const generateCustomerHTML = (name: string) => {
  const html = `
  <body
    style="
      font-family: Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
    "
  >
    <h1
      style="
        margin: 0;
        width: 100%;
        text-align: center;
        background: #0015d185;
        padding: 20px;
        color: white;
      "
    >
      Hello, ${name}
    </h1>

    <p style="width: 80%; padding-left: 10%; margin-top: 20px">
      I am Vineet Raj and I am really great full that you approached me for this
      task/job position will try my best to surpass your expectations.
      <br />
      Will connect you soon
      <br />
      <br />
      <i> Further for more discussion you can connect me on</i>
    </p>
    <span style="width: 80%;  padding-left: 10%; margin-top: 20px">
      <a
        style="
          color: white;
          text-decoration: none;
          padding: 10px;
          background: #0015d185;
          border-radius: 10px;
          margin: 20px 0;
        "
        href="https://www.linkedin.com/in/mrvineetraj"
        >Linkedin</a
      >
      <a
        style="
          color: white;
          text-decoration: none;
          padding: 10px;
          background: #0015d185;
          border-radius: 10px;
          margin: 20px 0;
        "
        href="mailto:vineetrajrj26@gmail.com"
        >vineetrajrj26@gmail.com</a
      >
    </span>

    <p style="width: 80%;  padding-left: 10%; margin-top: 20px">
      Thankyou
      <br />
      Regards Vineet Raj
    </p>

    <small style="width: 80%; padding-left: 10%; margin-top: 20px; text-align:center;">
      If not you then ignore 
      <br/>
      <i>
        This is an auto generated mail so please don't reply on this mail</i
      ></small
    >
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
    "
  >
    <h1
      style="
        margin: 0;
        width: 100%;
        text-align: center;
        background: #0015d185;
        padding: 20px;
        color: white;
      "
    >
      You have a new Customer
    </h1>

    <p style="width: 80%; margin-top: 20px; padding-left: 10%">
      ${name} has approached you for a task/job position
      <br />
      ${message}
      <br />
      Will connect you soon
      <br />
      <br />
      <i> Further for more discussion you can connect me on</i>
    </p>
    <span style="width: 80%; padding-left: 10%; margin-top: 20px">
      <a
        style="
          color: white;
          text-decoration: none;
          padding: 10px;
          background: #0015d185;
          border-radius: 10px;
          margin: 20px 0;
        "
        href="mailto:${email}"
        >Email</a
      >
    </span>

    <p style="width: 80%; padding-left: 10%; margin-top: 20px">
      Thankyou
      <br />
      Regards Vineet Raj
    </p>

    <small style="width: 80%; padding-left: 10%; margin-top: 20px; text-align:center;">
      If not you then ignore 
      <br/>
      <i>
        This is an auto generated mail so please don't reply on this mail</i
      ></small
    >
  </body>
  `;

  return html;
};

export { generateCustomerHTML, generatePersonalMailHTML };
