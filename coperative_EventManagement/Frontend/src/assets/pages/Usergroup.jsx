import CustomSidenav from "../components/CustomSidenav"
import Tabledet from "../components/Tabledet"

function Usergroup() {
  return (
    <>
    <div style={{display:"flex"}}>
              <CustomSidenav/>
            
            <div style={{marginLeft:"auto",marginRight:"auto"}}>
                <br>
                </br>
                <h1>Registered Users</h1>
                <br></br>
                <br></br>
                <Tabledet/>
               
                
                </div>      
        </div> 
    </>
  )
}

export default Usergroup