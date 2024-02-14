import CustomNavebar from "../../components/CustomNavebar.jsx";
import EventCard from "../../components/EventCard/EventCard.jsx";
import Footer from "../../components/common/footer/Footer.jsx";
import { eventList } from "../../components/data/Data.jsx";
import Back from "../../components/common/Back.jsx"
import ing from "../../images/I2.jpg"
import "./EventList.css";
const EventList = () => {
  const renderEventCards = () => {
    return eventList.map(({ id, date, heading, location, img }) => {
      return (
        <EventCard
          key={id}
          id={id}
          date={date}
          heading={heading}
          location={location}
          img={img}
        />
      );
    });
  };
  return (
    <div>
    <CustomNavebar/>    
    <Back name='' title='We build your dream around you' cover={ing} />
      
      <div className="event-list-wrapper">
        <div className="event-list">
          {eventList.length > 0 ? (
            renderEventCards()
          ) : (
            <p>No events available</p>
          )}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};
export default EventList;