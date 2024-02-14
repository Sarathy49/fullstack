import { useCallback, useState } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import SearchEventList from "../../components/SearchEventList/SearchEventList";
import './FilterEvents.css';
import CustomNavebar from "../../components/CustomNavebar";
import Footer from "../../components/common/footer/Footer";
import Back from "../../components/common/Back";
import ig from "../../images/front.jpg"
const FilterEvents = ()=>{
   const [monthYear,setMonthYear]=useState({
    selectedMonth:null,
    selectedYear:null
   })
   const getMonthYear = useCallback((selectedMonth,selectedYear)=>{
      setMonthYear({selectedYear,selectedMonth})
   },[])
   
    return(
      <div>
        <CustomNavebar/>
        <Back name='Events' title='Design your perfect event' cover={ig} />
         <div className="find-events-wrapper">
          <FilterBox getMonthYear={getMonthYear}/>
          <SearchEventList monthYear={monthYear}/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    )
  }
  export default FilterEvents;