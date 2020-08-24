import React, { useState, useEffect } from 'react';


const HeroVideo = () => {

    return (
      <React.Fragment>

    <div className="fullscreen-video-wrap" dangerouslySetInnerHTML={{ __html: `
      <div style="background: black;">

        <video
          style="opacity: .5;"
          playsinline 
          loop 
          autoPlay 
          muted 
          autobuffer 
          poster="https://relatacomm.files.wordpress.com/2020/08/social-advertising-blank.png"
        >

        
        <source 
          src="https://relatacomm.files.wordpress.com/2020/08/go-delhi-go-_-delhi-in-two-minutes-_-hyperlapse1080p.mp4" type="video/mp4" />
        
        <source 
          src="https://videos.files.wordpress.com/WjJfjrBi/cities-from-around-the-world-_-hyperlapse-timelapse-_-4k720p_fmt1.ogv" type="video/ogg" />
        Your browser does not support the video tag. I suggest you upgrade your browser.

        </video>     
      </div>       
` }}>
</div>

    
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


{/* 


      <div dangerouslySetInnerHTML={{ __html: `
  
      <div style="background: black">
        <section id="default-version-splash" class="home splash videoWrapper video" style="opacity: .7;">
          <video
            muted
            autoplay
            playsinline
            >
            <source src='https://www.alfredorafael.com/wp-content/uploads/2020/04/for-portfolio.mp4'
          />
          </video>
      
        </section>
      </div>
  ` }}
  />

*/}