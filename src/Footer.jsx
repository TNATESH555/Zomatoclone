import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";

function Footer() {
  return (
    <div className='footer'>
        <div className='footertop'>
            <img src="zomatologo.avif" className='footertoplogo' alt="" />
            <div className='footerbutton'>
            <button style={{height:30,marginRight:25}}><img src="flagsv.png" alt="indiaflag" style={{height:17,width:20}} /> India <IoIosArrowDown />
            </button>
            <button><CiGlobe size={30} style={{height:21}} />English <IoIosArrowDown />
            </button></div>
        </div>
        <div className='combinedfootersec'>
            <div className='footersec' >

          <h3>About Zomato</h3>   <br />
 <Link className='undotext'>Who We Are</Link> <br /><br />
 <Link className='undotext'>Blog</Link> <br /> <br />
 <Link className='undotext'>Work With Us</Link><br /> <br />
 <Link className='undotext'>Investor Relations</Link><br /> <br />
 <Link className='undotext'>Report Fraud</Link> <br /> <br />
 <Link className='undotext'>Press Kit</Link><br /><br />
 <Link className='undotext'>Contact Us</Link>
                </div>
                
         <div className='footersec1'>
        <h3>Zomaverse</h3>  <br /> <br />
        <Link className='undotext'>Zomato</Link> <br /> <br />

        <Link className='undotext'>Blinkit</Link> <br /><br />

        <Link className='undotext'>Feeding India</Link><br /><br />

        <Link className='undotext'>Hyperpure</Link><br /><br />

        <Link className='undotext'>Zomato Live</Link><br /><br />

        <Link className='undotext'>Zomaland</Link><br /><br />

        <Link className='undotext'>Weather Union</Link>
         
        </div>
          <div className='footersec2'><h3> For Restaurants</h3> <br />  <br />
          <Link className='undotext'>Partner With Us</Link><br />  <br />
          <Link className='undotext'>Apps For You</Link>
            </div> 
          
          <div className='footersec3'>
         <h3>Learn More</h3> <br />  <br />
         <Link className='undotext'>Privacy</Link> <br />  <br />

         <Link className='undotext'>Security</Link> <br />  <br />

         <Link className='undotext'>Terms</Link> <br />  <br />

         <Link className='undotext'>Sitemap</Link>
            </div>
             <div className='footersec4'>
    <h3>Social links</h3>  <br />  <br />

    <Link><FaLinkedin  size={30} style={{marginLeft:10,marginTop:-60}}/></Link>
    <Link><AiFillInstagram  size={30} style={{marginLeft:10,marginTop:-60}}/></Link>
    <Link><AiFillTwitterCircle size={30} style={{marginLeft:10,marginTop:-60}}/></Link>
    <Link><FaYoutube size={30} style={{marginLeft:10,marginTop:-60}}/></Link>
    <Link><IoLogoFacebook size={30} style={{marginLeft:10, marginTop:-60}}/></Link>
           <br /> <br />

           <img src="gooplay.webp" alt="googleplay"  style={{height:30,width:110,marginLeft:10}}/> <br /> <br /><img src="apple.webp" alt="applestore" style={{height:30,width:110,marginLeft:10}} />
            </div> <div></div>
        </div>
        <hr />
        <h4 style={{marginLeft:30}}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
        </h4></div>
  )
}

export default Footer