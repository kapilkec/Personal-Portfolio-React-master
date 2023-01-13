import "./Port2.css";
import { themeContext } from "../../Context";
import React, { useContext } from "react";
import vtradeThumbnail from "../../img/vtradeThumbNail.png";
import kecMedia from "../../img/kecMedia.png";
import supplyChain from "../../img/supplyChain.jpg"


export default function ()  {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
    <div className="Port2"> 
            <div class="PortHead">
                <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
                <span>Portfolio</span>
            </div>
        <div class="containerp">
             
            <div class="cardp">
                <div class="boxp">
                    <div class="contentp">
                         <h1>Trading Platform</h1> 
                         <div className="Image">
                            <img src={vtradeThumbnail}  alt="" />
                         </div>
                         
                         <div className="ProjectButtons">
                            <button className="button s-button">GitHub</button>
                           
                            <button className="button s-button">Demo</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cardp">
                <div class="boxp">
                <div class="contentp">
                     <h1>Instagram mock</h1> 
                    <img src={kecMedia} alt="" />
                        
                    <div className="ProjectButtons">
                    <button className="button s-button">GitHub</button>
                        <button className="button s-button">Demo</button>
                     
                    </div>
                </div>
                </div>
            </div>

            <div class="cardp">
                <div class="boxp">
                <div class="contentp">
                <h1>SupplyChain Mgmt</h1> 
                    <img src={supplyChain} alt="" />
                        
                    <div className="ProjectButtons">
                    <button className="button s-button">GitHub</button>
                        <button className="button s-button">Demo</button>
                     
                    </div>
                </div>
                </div>
            </div>

            <div class="cardp">
                <div class="boxp">
                <div class="contentp">
                     
                </div>
                </div>
            </div>
        </div>
</div>
    )
}