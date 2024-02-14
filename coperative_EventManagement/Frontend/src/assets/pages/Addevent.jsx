import CustomSidenav from "../components/CustomSidenav"
import "../css/eventreg.css"
function Addevent() {
  return (
    <>
     <div style={{display:"flex"}}>
              <CustomSidenav/>
            
            <div style={{marginLeft:"auto",marginRight:"auto"}}>
                <br>
                </br>
                <br></br>
                <br></br>
                <form className="form">
  <p className="title">Add Event </p>
  <p className="message">apply now and get full access to our event </p>
  <div className="flex">
    <label>
      <input required="" placeholder="" type="text" className="input" />
      <span>Event Type</span>
    </label>
    <label>
      <input required="" placeholder="" type="text" className="input" />
      <span>Description</span>
    </label>
  </div>
  <label>
    <input required="" placeholder="" type="text" className="input" />
    <span>Total Package</span>
  </label>
  <label>
    <input required="" placeholder="" type="password" className="input" />
    <span>Participants Count</span>
  </label>
  <label>
    <input required="" placeholder="" type="password" className="input" />
    <span>Charges</span>
  </label>
  
  <button className="submit">Add Event</button>
  
</form>
                
               
                
                </div>      
        </div> 

    

    


    </>
  )
}

export default Addevent