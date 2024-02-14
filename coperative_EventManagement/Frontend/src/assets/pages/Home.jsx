import { useCallback, useState } from "react";
import Cards from "../components/Cards"
import CustomNavebar from "../components/CustomNavebar"
import Featured from "../components/featured/Featured"
import Images1 from "../images/image1.jpg"
import Footer from "../components/common/footer/Footer"
import Awards from "../components/awards/Awards"
import hm from "../images/2007.i039.003..blogging_vlogging_isometric_icons-10-removebg-preview.png"
import { NavLink } from "react-router-dom"
import "../css/hero.css"
import FilterBox from "../components/FilterBox/FilterBox"
import SearchEventList from "../components/SearchEventList/SearchEventList"


const Home = () => {
  const [monthYear,setMonthYear]=useState({
    selectedMonth:null,
    selectedYear:null
   })
   const getMonthYear = useCallback((selectedMonth,selectedYear)=>{
      setMonthYear({selectedYear,selectedMonth})
   },[])
  return (
    <div className="ctainer">
      <header>
        <CustomNavebar />
      </header>
      {/* <div style={{height:"100%"}}>
      <Carousel style={{height:"500px"}} autoplay className="custom-slider">
      <img src="https://wallpapercave.com/wp/wp7488275.jpg" height="250" />
      <img src="https://www.itl.cat/pngfile/big/290-2903513_business-meeting-wallpaper-widescreen-wallpapers-of-business-meeting.jpg" height="250" />
      <img src="https://eventacademy.com/wp-content/uploads/2018/11/cambridge-corporate-photographer-io-2016-003.jpg" height="250" />
      <img src="https://legacytips.com/wp-content/uploads/2022/10/Top-Event-Planners-in-Lagos.jpg" height="250" />
      <img src="https://media.licdn.com/dms/image/C4E12AQH_SgSxU-gxVw/article-cover_image-shrink_720_1280/0/1520165376453?e=2147483647&v=beta&t=reTKhbangfsqxdWL2snxCurfG_7xK8NkoUVMSXp2viY" height="250" />
      </Carousel>
      </div> */}
      <div style={{backgroundColor:"beige"}}>
        <div style={{flexDirection:'row',display:'flex'}}>
           <img className="t" style={{width:800,height:700}} src={hm}></img>
           <div style={{marginLeft:50}}>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="ft" >Your vision. Our innovation: Event solutions.</h1>
            <br></br>
            <br></br>
            <p className="rt">Your online event management transation is completely gauranteed and seure</p>
            <p className="rt">Earn reward points & get bonus anytime,anywhere</p>
            <br></br>
            <br></br>
            <div style={{flexDirection:'row',display:'flex'}}>

           <NavLink to="/allevent"> <button className="innovation-button">
      Get started
    </button></NavLink>
    <div style={{marginLeft:30}}>
        <NavLink to="/about">

    <button className="innovation-button">
        
     Learn more
    </button>
        </NavLink>

    </div>
    
{/*   
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <footer>

            <div className="footer-icons">
        <FontAwesomeIcon icon={faCreditCard} />
        <div style={{marginLeft:20}}>

        <FontAwesomeIcon icon={faMobileAlt} />
        </div>
        <div style={{marginLeft:20}}>

        <FontAwesomeIcon icon={faWifi} />
        </div> */}
        {/* Add more icons as needed */}
      </div>
      {/* <p>&copy; 2024 Fiberr!!!</p>
            </footer> */}
           </div>
        </div>
        </div>

      
     

         <br></br>
          <Featured />
          <br></br>
          <h2 className="q">OUR AWARDS</h2>
          <br></br>
          <br></br>
          <Awards/>
          <br>
          </br>
          <h2 className="q">SCEARCH YOUR VISIONS</h2>
          <div className="find-events-wrapper">
          <FilterBox getMonthYear={getMonthYear}/>
          <SearchEventList monthYear={monthYear}/>
        </div>
       
       
        {/* <div className="imagecard">
          <Cards Image={Images1} name="concert" content="enjoy the vibe"/>

        </div> */}

        
       
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home