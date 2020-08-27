import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import $ from "jquery";
import emailjs from 'emailjs-com';
import { Label } from "reactstrap";


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ojvT6ulP', 'contact-form-id', 'user_HOHwzUZ9ZKm88Y5S2m9s0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <React.Fragment>
    <div class="headline-no-image">
			<div class="row">
				<div class="twelve col">
					<h1>Contact Us</h1>
				</div>
			</div>
      </div>

      <Container>


    <form className="contact-form-class" id="contact-form-id" onSubmit={sendEmail}>
    
    <div class="twelve col">
      <h1>Something</h1>
    </div>      
    
    <div className="row">
        <div className="col">
          <input type="text" name="user_name" className="form-control" placeholder="First name" />
          <br/>
          <input type="text" className="form-control" placeholder="Last name" />
          <br/>
          <Label>Email</Label>
          <input type="email" name="user_name" className="form-control" placeholder="Last name" />
        </div>


        <div className="col" style={{itemsAlign: 'left'}}>
          <textarea class="form-control" name="message" id="validationTextarea" placeholder="Required example textarea" required/>                  
        </div>
    </div>
    <br/>
    <input type="submit" value="Send" />
    
    </form>
    </Container>
    
    
    </React.Fragment>
  );
}

{/* 



  <form className="contact-form-class" id="contact-form-id" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <br/>
      <label>Email</label>
      <input type="email" name="user_email" />
      <br/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>



*/}