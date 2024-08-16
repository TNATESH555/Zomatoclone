
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import React, { useState } from 'react';
import { Button, Collapse, Box, Typography } from '@mui/material';

function BodyApp() {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
  
    const handleToggle = () => {
      setOpen(!open);
    };

    const handleTogglee = () => {
      setOpen1(!open1);
    };

    const handleToggleee = () => {
      setOpen2(!open2);
    };



  return (
    <div className='AppBody'><div className='bodydiv1'><img src="riceplate.avif" alt="riceplate"  style={{height:190,width:500, borderRadius:10}}/> <div className='bodydiv1text'><h4 style={{fontSize:20,marginLeft:20,paddingTop:10}}>Order online</h4><p style={{marginLeft:20,paddingBottom:10,marginTop:-20}}>Stay home and order to your doorstep</p></div></div>
    <div className='bodydiv2'><img src="table.avif" alt="riceplate"  style={{height:190,width:500, borderRadius:10}}/><div className='bodydiv1text'><h4 style={{fontSize:20,marginLeft:20,paddingTop:10}}>Dining</h4><p style={{marginLeft:20 ,paddingBottom:10,marginTop:-20}}>View the city's favourite dining venues</p></div></div>
<div className='curatedItems'><h1 style={{fontSize:50 ,marginLeft:10}}>Collections </h1><br /><p style={{marginLeft:13,marginTop:-45}}>Explore curated lists of top restaurants,cafes,pubs,and bars in Coimbatore,based on trends</p> 
  <p className='trends'>All collections in Coimbatore <IoIosArrowForward style={{color:'rose', position:'relative',top:3.5}}/> </p><div></div> <div className='boxdiv'> <div className='bodyimgbox1'><img src="cafe.jpg" alt="cafe" style={{height:300,width:240,borderRadius:10}} /><p style={{color:'white',marginTop:-30,marginleft:50}}>11 Great Cafes</p></div>
  <div className='bodyimgbox2' ><img src="pubs.avif" alt="pubs" style={{height:300,width:240,borderRadius:10}} /><p style={{color:'white',marginTop:-30,marginleft:50}}>11 Best Pubs and Bars</p></div><div className='bodyimgbox3'><img src="breakfast.avif" alt="breakfast" style={{height:300,width:240,borderRadius:10}} /><p style={{color:'white',marginTop:-30,marginleft:50}}>11 Blissful Breakfast places</p></div> <div className='bodyimgbox4'><img src="cofeeshops.avif" alt="coffeshops" style={{height:300,width:240,borderRadius:10}} /><p style={{color:'white',marginTop:-30,marginleft:50}}>6 Premium Coffee Shops</p></div></div></div>
    
    <div>
      <div className='buttonsdiv'> <button className='buttons'><img src="filter.jpg" alt="" style={{height:15,width:15, paddingLeft:10}} />filters</button><button className='buttons' >Offers</button><button className='buttons'>Rating 4.0 +</button><button className='buttons'>Pet Friendly</button><button className='buttons'>Outdoor Seating</button><button className='buttons'>Serves Alcohol</button> <button className='buttons'>Open now</button>
      </div>
    </div>
    <div>
      <div>
        <h1 style={{marginLeft:160,marginTop:50}}>Popular localities in and around Coimbatore</h1> <br />
        <div> <div><Link><button  className='buttonarrow'>Peelamedu<IoIosArrowForward style={{marginLeft:180}}/></button></Link>
        <Link><button  className='buttonarrow1'>Rs Puram<IoIosArrowForward style={{marginLeft:180}}/> </button></Link>
        <Link><button  className='buttonarrow2'>Race Course<IoIosArrowForward style={{marginLeft:180}}/></button></Link></div>
        <div><Link><button  className='buttonarrow'>Saibaba Col<IoIosArrowForward style={{marginLeft:180}}/></button></Link>
        <Link><button  className='buttonarrow1'>Gandhipuram<IoIosArrowForward style={{marginLeft:180}}/></button></Link>
        <Link><button  className='buttonarrow2'>Town Hall<IoIosArrowForward style={{marginLeft:180}}/></button></Link></div>
        <div><Link><button  className='buttonarrow'>Ramanath<IoIosArrowForward style={{marginLeft:180}}/></button></Link>
        <Link><button  className='buttonarrow1'>Kalapatti<IoIosArrowForward style={{marginLeft:180}}/></button></Link>
        <Link><button  className='buttonarrow2'>See more <MdOutlineKeyboardArrowDown style={{marginLeft:180}}/></button></Link></div></div>
      </div>
    </div>
    <div>
      <div>
        <img src="app.avif" alt="" className='mobileapp' />
      </div> <div className='appinfo'><h1>Get the Zomato App</h1> <p>We will send you a link, open it on your phone to download the app </p><br />
      <input type="radio" />Email <input type="radio" />Phone <br /> <input type="text" placeholder='Email' style={{height:30,width:350, marginTop:15,marginBottom:15, marginRight:15}}/> <Button variant="contained">Contained</Button> <br />

      Download App from <br />

      <img src="gooplay.webp" alt="googleplay" style={{height:40,width:150,marginTop:20}}/> <img src="apple.webp" style={{height:40,width:150,marginTop:20}} alt="apple" />


      </div>
    </div>
     <div>
      <h1 style={{marginLeft:170}}>Explore options near me </h1> <br />
     <Box sx={{ width: 1000, margin: 'auto', textAlign: 'center', mt: 4,  border:1}}>
      <Button  onClick={handleToggle} className='buttondrop'>
        {open1 ? 'Popular cuisines near me' : 'Popular cuisines near me'}
        <MdOutlineKeyboardArrowDown  style={{size:50}}/></Button>

      <Collapse in={open}>
        <Box
          sx={{
            mt: 2,
            p: 2,        
            borderRadius: 2,
            
          }}
        >
          <Typography>
         
          Bakery food near meBeverages food near meBiryani food near meBurger food near meChettinad food near meChinese food near meDesserts food near meIce Cream food near meJuices food near meMomos food near meMughlai food near meNorth Indian food near mePizza food near meSandwich food near meSeafood food near meShake food near meShawarma food near meSichuan food near meSouth Indian food near meStreet food near me</Typography>
        </Box>
      </Collapse>
    </Box>

    <Box sx={{ width: 1000, margin: 'auto', textAlign: 'center', mt: 4,  border:1}}>
      <Button  onClick={handleTogglee} className='buttondrop'>
        {open1 ? 'Popular restaurant types near me' : 'Popular restaurant types near me'}
        <MdOutlineKeyboardArrowDown  style={{size:50}}/></Button>

      <Collapse in={open1}>
        <Box
          sx={{
            mt: 2,
            p: 2,        
            borderRadius: 2,
            
          }}
        >
          <Typography>
         
          Bakeries near meBars near meBeverage Shops near meBhojanalya near meCafés near meCasual Dining near meDessert Parlors near meDhabas near meFine Dining near meFood Courts near meFood Trucks near meKiosks near meLounges near meMeat Shops near mePaan Shop near meQuick Bites near meSweet Shops near me</Typography>
        </Box>
      </Collapse>
    </Box>

    <Box sx={{ width: 1000, margin: 'auto', textAlign: 'center', mt: 4,  border:1}}>
      <Button  onClick={handleToggleee} className='buttondrop'>
        {open2 ? 'Top Restaurant Chains' : 'Top Restaurant Chains'}
        <MdOutlineKeyboardArrowDown  style={{size:50}}/></Button>

      <Collapse in={open2}>
        <Box
          sx={{
            mt: 2,
            p: 2,        
            borderRadius: 2,
            
          }}
        >
          <Typography>
         
          Burger KingKFCMcDonald'sPizza Hut

</Typography>
        </Box>
      </Collapse>
    </Box>
     </div>
    
    </div>
  )
}

export default BodyApp