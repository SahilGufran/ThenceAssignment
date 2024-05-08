import React from "react";
import vg from "../assets/2.webp";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <h2>Success stories</h2>
    <h1>Every Success journey </h1>
    <h1> we've encountered</h1>

      <div className="home" id="home">
        <main>
          
          <h1>Enhance Fortune50  </h1>
          <h2> insights teams </h2>
          <h2>  research capabilities</h2>
          <h4>Solution to all your problems</h4>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
        <h3>What is on your Mind !</h3>
        <h1>Ask Questions?</h1>
        <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
        <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="Do you offer freelancers?">
        <strong>Yes we do.</strong>Absolutely! At our software company, we understand that every project is 
        unique and may require specialized skills or additional resources to 
        ensure its success. That's why we offer the option to engage freelancers
        as part of our comprehensive service offerings.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="What is the guarantee that I will satisfied with the hired talent?">
          <strong>We have a stong hiring procedure.</strong> As a hiring company,
           ensuring customer satisfaction with the talent we provide is a top priority.
            While we can't offer a guarantee of satisfaction in the traditional sense,
          we take several measures to mitigate risks and maximize the likelihood of a 
          successful outcome for our customers.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Can I hire multiple talents at once?">
          <strong>Absolutely.</strong> 
           Yes you can hire multiple talents simultaneously for your project.
           With multiple talents working in parallel, you can accelerate the pace of 
           your project and meet tighter deadlines. Tasks can be distributed among 
           freelancers based on their strengths and availability, 
           allowing for more efficient project execution.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="Who can help pick a right skillset and duration for me?">
          <strong>Our team has a help line 24/7.</strong> 
          As a software company, we understand the importance of selecting the right skill set and duration for your project. We have a dedicated team of project managers and technical experts who 
          are well-equipped to assist you in this process.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>

        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Socials</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <a href="https://www.google.com">Google</a>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <a href="https://www.amazon.com">Amazon</a>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <a href="https://www.youtube.com">YouTube</a>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <a href="https://www.instagram.com">Instagram</a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
