import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { eventList } from "../../components/data/Data";

import {MdCalendarMonth} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5"
import "./EventDetails.css";
import CustomNavebar from "../../components/CustomNavebar";
import Footer from "../../components/common/footer/Footer";
import EnrollForm from "../EnrollForm";
import { useState } from 'react';
const EventDetails = ()=>{
  const {id}=useParams()
  const numId = Number(id)

  const filteredEvent = eventList.find(
    eventDetail=>eventDetail.id===numId)

  // const [setStar] = useState(5);

  // const onChange=(nextValue)=>{
  //     setStar(nextValue)
  // }
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };
    

  return(
    <div className="event-details-continer">
      <CustomNavebar/>
      
      <div className="event-details-wrapper">
        <img src={filteredEvent.img} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name : {filteredEvent.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">
                {filteredEvent.date.month}
              </span>
              <span className="font-weight-med">{filteredEvent.date.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">
              {filteredEvent.description}
            </span>
          </p>
          <Button onClick={handleToggle} variant="primary">Enroll Now</Button>
      {isOpen && <EnrollForm/>}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
export default EventDetails;