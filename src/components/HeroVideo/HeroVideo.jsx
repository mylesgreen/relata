import React, { useState, useEffect } from 'react';


const HeroVideo = () => {

    return (
      <React.Fragment>
      <div style={{background: 'black'}}>
      <section id="default-version-splash" class="home splash videoWrapper video" style={{opacity: '.5', background: 'black'}}>
      <video class="touch" autoplay="autoplay" autoPlay loop="loop" muted="muted" playsinline>
        <source src="https://relata.us/wp-content/uploads/2020/08/Myles-first-visit-back720p.mp4" />
      </video>
      <video class="non-touch" autoplay="autoplay" loop="loop" muted="muted" playsinline>
        <source src="https://relata.us/wp-content/uploads/2020/08/Myles-first-visit-back720p.mp4" type="video/mp4" />
      </video>
    </section>
    </div>
      </React.Fragment>
    );
}


export default HeroVideo;

