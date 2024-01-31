import { useParams,Link} from "react-router-dom";
import { eventList } from "../../components/data/Data";

import {MdCalendarMonth} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5"
import "./EventDetails.css";
import CustomNavebar from "../../components/CustomNavebar";
import Footer from "../../components/common/footer/Footer";
const EventDetails = ()=>{
  const {id}=useParams()
  const numId = Number(id)

  const filteredEvent = eventList.find(
    eventDetail=>eventDetail.id===numId)

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
          <button><Link to="/ereg">Register</Link></button>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
export default EventDetails;