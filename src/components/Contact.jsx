import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h3>Registration Form</h3>
        <h1><b>START YOUR SUCCESS </b></h1>
        <h1><b> JOURNEY HERE!</b></h1>

        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Eg: Rahul" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="abc@xyz.com" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
