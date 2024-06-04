import React from "react";

const HeroVideo = () => {
  return (
    <React.Fragment>
      <div
        className="fullscreen-video-wrap"
        dangerouslySetInnerHTML={{
          __html: `

        <video
          style="opacity: 1;"
          playsinline 
          loop 
          autoPlay 
          muted 
          autobuffer 
          poster="https://relatacomm.wordpress.com/wp-content/uploads/2020/08/loadingimg-1.png"
        >

        <source 
          src="https://relatacomm.wordpress.com/wp-content/uploads/2020/08/relata-header-w-shadow.mp4" type="video/mp4" />
        
        <source 
          src="https://relatacomm.wordpress.com/wp-content/uploads/wvLMWrIp/relata-header-w-shadow_fmt1.ogv" type="video/ogg" />
        Your browser does not support the video tag. I suggest you upgrade your browser.

        </video>     
`,
        }}
      ></div>
    </React.Fragment>
  );
};

export default HeroVideo;
