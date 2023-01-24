import "./Port2.css";
import { themeContext } from "../../Context";
import React, { useContext } from "react";
import vtradeThumbnail from "../../img/vtradeThumbNail.png";
import kecMedia from "../../img/kecMedia.png";
import supplyChain from "../../img/supplyChain.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ()  {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const notify = () => { 
    toast.error('OOPS! Demo not available', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    return(
    <div className="Port2" id="portfolio"> 
            <div class="PortHead">
                <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
                <span>Portfolio</span>
            </div>
        <div class="containerp">
             
            <div class="cardp">
                <div class="boxp">
                    <div class="contentp">
                         <h1>Trading Platform</h1>                         
                                <img src={vtradeThumbnail}  alt="" />
                     
                         
                         <div className="ProjectButtons" >
                            <a href="https://github.com/kapilkec/Virtual-trading"  target={"_blank"}>
                                <button className="button s-button">GitHub</button>
                            </a>
                            <a href="https://vtradesite.000webhostapp.com/" target={"_blank"}>
                                <button className="button s-button">Demo</button> 
                            </a>
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
                    <a href="https://github.com/kapilkec/zproject"  target={"_blank"}>
                         <button className="button s-button">GitHub</button>
                    </a>
                    <a href="https://socialmedia-3d540.web.app/"  target={"_blank"}>
                        <button className="button s-button">Demo</button>
                    </a>
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
                    <a href="https://github.com/kapilkec/Supply-chain"  target={"_blank"}>
                         <button className="button s-button">GitHub</button>
                    </a>                    
                    
                    <button className="button s-button" onClick={notify}>Demo</button>
                    <ToastContainer
                    
                    />
                    
                    </div>
                </div>
                </div>
            </div>

            <div className="cardp">
                <div className="boxp">
                <div className="contentp">
                     
                </div>
                </div>
            </div>
        </div>
</div>
    )
}