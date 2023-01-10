import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    
    <div className="experience" id='experience'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <section className="service">
          <article>
            <div className="service-head">
              <h3>Frontend Development</h3>
            </div>
            <ul className="service-list">
              <li>
                 A front-end design
                takes on the task of engaging visitors so that businesses and
                organizations can reap the benefits of an online presence
              </li>
              <li>
                In today’s interactive world, it isn’t enough to create a
                user-friendly interface
              </li>
              <li>
                A web design must also
                drive sales and conversions
              </li>
              <li>
                It should responsive to how every visitor interacts with a site
              </li>
              <li>
                They are action oriented, easy for the user to engage with, and
                help a company or website collect valuable information
              </li>
            </ul>
          </article>
          <article>
            <div className="service-head">
              <h3>Frontend Development</h3>
            </div>
            <ul className="service-list">
              <li>
                 A front-end design
                takes on the task of engaging visitors so that businesses and
                organizations can reap the benefits of an online presence
              </li>
              <li>
                In today’s interactive world, it isn’t enough to create a
                user-friendly interface
              </li>
              <li>
                A web design must also
                drive sales and conversions
              </li>
              <li>
                It should responsive to how every visitor interacts with a site
              </li>
              <li>
                They are action oriented, easy for the user to engage with, and
                help a company or website collect valuable information
              </li>
            </ul>
          </article>
        </section>
    </div>
  );
};

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