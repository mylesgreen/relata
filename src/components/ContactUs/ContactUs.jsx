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


  <div style={{
    backgroundImage: 'url("https://relatacomm.files.wordpress.com/2020/09/background-w-symbol-1.png")',
    backgroundPosition: 'center',
    marginBottom: '-2%',
    height: '100vh',
  }}>
      

  <div class="headline-no-image">
  <div class="row">
    <div class="twelve col">
      <h1 style={{fontWeight: '500'}}>Contact</h1>
    </div>
  </div>
  </div>


      <Container>


    
    <div className="title padding-bottom-none" style={{marginTop: '5%'}}>
        <h2><span className="gold">Let's get in touch</span></h2>
    </div>

    <br/>




    <form className="contact-form-class" id="contact-form-id" onSubmit={sendEmail}>
    
    <div className="row">
        <div className="col">
          <div style={{display: 'flex'}}>
          
          <input 
            type="text" 
            name="user_name" 
            className="form-control" 
            placeholder="Name"
          />

          

          <input 
            type="email" 
            name="user_email" 
            className="form-control" 
            placeholder="Email"
            style={{marginLeft: '5%'}}
          />
          
          </div>
          
          <br/>

          <input 
            type="phone" 
            name="user_phone" 
            className="form-control" 
            placeholder="Phone Number"
          />
          <br/>

          <textarea 
            className="form-control" 
            name="message" 
            id="validationTextarea" 
            placeholder="What are you trying to accomplish?" 
            required
          />

        </div>
        
        <div className="col">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sagittis ipsum. 
        Ut suscipit nisi quis turpis mattis auctor. Aenean faucibus libero lacinia justo 
        facilisis commodo. Donec elementum, tortor sit amet suscipit tempor, libero eros 
        tincidunt justo, ut fringilla sem augue et mi. Mauris odio nibh, imperdiet eu arcu 
        vitae, suscipit fringilla magna. Aliquam volutpat mi urna, vel euismod justo viverra 
        vel. Ut consequat sapien sit amet placerat tempor. Vivamus molestie, lorem at rutrum 
        elementum, quam leo ullamcorper velit, sit amet ultrices purus eros efficitur dolor. 
        Suspendisse gravida neque non ex sagittis dignissim. Ut ac magna feugiat, efficitur 
        lorem eu, ullamcorper diam. Aliquam erat volutpat. Ut sit amet lorem sit amet lorem 
        porta vulputate. Donec pretium lacus sed commodo luctus. 
      
        </div>
    </div>
    <br/>
    <input type="submit" value="Send" />
    
    </form>
    <br/>
    <br/>

    </Container>


    </div>
    
    
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