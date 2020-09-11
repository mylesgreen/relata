import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import $ from "jquery";
import emailjs from 'emailjs-com';
import { Label } from "reactstrap";


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wmdyclw', 'template_relata_1', e.target, 'user_6xcmgMLL8rmBV1NuDEh0e')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      alert('Your message has been received! Thank you');
  }

  //   emailjs.sendForm('gmail', 'template_mahgjpp', 'contact-form-id', 'user_6xcmgMLL8rmBV1NuDEh0e')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }

  return (
    <React.Fragment>


  <div style={{
    backgroundImage: 'url("https://relatacomm.files.wordpress.com/2020/09/background-w-symbol-1.png")',
    backgroundPosition: 'center',
    marginBottom: '-2%',
    height: '100vh',
  }}>
      

  <div className="headline-no-image">
  <div className="row">
    <div className="twelve col">
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
            placeholder="Name (required)"
            required
          />

          

          <input 
            type="email" 
            name="user_email" 
            className="form-control" 
            placeholder="Email (required)"
            style={{marginLeft: '5%'}}
            required
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
            placeholder="What are you trying to accomplish? (required)" 
            required
          />

        </div>
        
        <div className="col" style={{marginTop: '-1%', color: 'white'}}>
        Our team is based out of major hubs along the US East Coast but we serve clients
        regardless of their location – national and international!

        <br/>
        <br/>
        Send us a message with your business goals and someone from our team will get in 
        touch with you shortly.
        <br/>
        <br/>

        Let us show you why our approach to digital marketing and online presence will 
        make the difference for you.

        </div>
    </div>
    <br/>
    <input id="submit-btn" type="submit" value="Connect" style={{marginLeft: '1.6%'}}/>
    
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