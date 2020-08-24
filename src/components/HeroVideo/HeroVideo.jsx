import React, { useState, useEffect } from 'react';


const HeroVideo = () => {

    return (
      <React.Fragment>

      <div dangerouslySetInnerHTML={{ __html: `
  
      <div style="background: black">
        <section id="default-version-splash" class="home splash videoWrapper video" style="opacity: .7;">
          <video
            class="touch"
            muted
            autoplay
            playsinline
            src='https://www.alfredorafael.com/wp-content/uploads/2020/04/for-portfolio.mp4'
          />
      
          <video
            class="non-touch"
            muted
            autoplay
            playsinline
            src='https://www.alfredorafael.com/wp-content/uploads/2020/04/for-portfolio.mp4'
          />
        </section>
      </div>
  ` }}
  />
    
      </React.Fragment>
    );
}


export default HeroVideo;


{/* 

    <div style={{background: 'black'}}>
      <section id="default-version-splash" class="home splash videoWrapper video" style={{opacity: '.5', background: 'black'}}>
      <video className="touch" autoPlay loop muted playsinline>
        <source src="https://www.alfredorafael.com/wp-content/uploads/2020/04/for-portfolio.mp4" />
      </video>
      <video className="non-touch" autoPlay loop muted playsinline>
        <source src="https://www.alfredorafael.com/wp-content/uploads/2020/04/for-portfolio.mp4" type="video/mp4" />
      </video>
    </section>
    </div>

*/}