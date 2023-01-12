import React, { useContext } from "react";
import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
    
return(
  <div className="experienceWhole">
     <div className="awesome topExperience">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Experience</span>
        <span>in development</span>
        
        
        {/* <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div> */}
      </div>
   <div className="experience">
    
    <div className="expreience-left">
   
    <motion.div
      style={{ scale }}
    >
       <article >
            <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}>
          </div>
            <div className="service-head">
              <span className="titleHead">Frontend Development</span>
            </div>
            <ul className="service-list">
              <li>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="service-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
              &nbsp;&nbsp;
                 A front-end design
                takes on the task of engaging visitors so that businesses and
               
              </li>
              <li>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="service-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
              &nbsp;&nbsp;
                 A front-end design
                takes on the task of engaging visitors so that businesses and
                 
              </li>
             
               
            </ul>
          </article>
      
          <motion.div
            style={{
              scaleY: scrollYProgress
            }}
          /> 
            

        </motion.div>

        </div>
        <motion.div
      style={{ scale }}
    >
       <article>
            <div className="service-head">
              <span>Frontend Development</span>
            </div>
            <ul className="service-list">
              <li>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="service-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
              &nbsp;&nbsp;
                 A front-end design
                takes on the task of engaging visitors so that businesses and
                
              </li>
              <li>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="service-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
              &nbsp;&nbsp;
                 A front-end design
                takes on the task of engaging visitors so that businesses and
         
              </li>
             
               
            </ul>
            
          </article>
      
          <motion.div
            style={{
              scaleY: scrollYProgress
            }}
          /> 
            

        </motion.div>
    
        
    
    </div>
    </div>
  )

}










//   return (
    
//     <div className="experience" id='experience'>
//         <h5>What I Offer</h5>
//         <h2>Services</h2>
//         <section className="service">
//         <motion.div
//           initial={{ top: "19rem", left: "25rem" }}
//           whileInView={{ left: "12rem" }}
//           transition={transition}
//         >
     
//           </motion.div>
//           {/* <article>
//             <div className="service-head">
//               <span>Frontend Development</span>
//             </div>
//             <ul className="service-list">
//               <li>
//               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="service-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
//               &nbsp;&nbsp;
//                  A front-end design
//                 takes on the task of engaging visitors so that businesses and
//                 organizations can reap the benefits of an online presence
//               </li>
//               <li>
//               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="service-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
//               &nbsp;&nbsp;
//                  A front-end design
//                 takes on the task of engaging visitors so that businesses and
//                 organizations can reap the benefits of an online presence
//               </li>
             
               
//             </ul>
//           </article> */}
//         </section>
//     </div>
//   );
// };

export default Experience;


// before

{/* <div className="achievement"> */}
{/* darkMode */}
{/* <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
<span  style={{color: darkMode?'white':''}}>years </span>
<span>Experience</span>
</div>
<div className="achievement">
<div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
<span  style={{color: darkMode?'white':''}}>completed </span>
<span>Projects</span>
</div>
<div className="achievement">
<div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
<span  style={{color: darkMode?'white':''}}>companies </span>
<span>Work</span>
</div> */}