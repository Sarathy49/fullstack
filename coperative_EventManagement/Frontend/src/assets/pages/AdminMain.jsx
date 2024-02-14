import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,

} from 'mdb-react-ui-kit';

import CustomSidenav from '../components/CustomSidenav';
import LineChart from '../components/LineChart';

  
  
  
  const AdminMain = () => {
    return (
      <>    
  
            <div style={{display:"flex"}}>
              <CustomSidenav/>
              <div>

             
              <MDBContainer className="py">
              <MDBRow>
                
                  <MDBCol style={{marginLeft:"auto",marginRight:"0%",padding:"20px"}} lg="8">
                      <MDBCard style={{}} className="mb-4">
                          <MDBCardBody>
                              <MDBRow>
                                  <MDBCol sm="4">
                                      <MDBCardText>Name</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">Sarathy</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="4">
                                      <MDBCardText>Email</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">sarathy934@gmail.com</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="4">
                                      <MDBCardText>Phone</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">9345723462</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="4P">
                                      <MDBCardText>Role</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">Admin</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                             
                          </MDBCardBody>
                      </MDBCard>


                  </MDBCol>
              </MDBRow>
          </MDBContainer>
          </div>
      
            
            <div style={{marginTop:"25%",marginLeft:"-35%"}} >
                <br>
                </br>
                <br></br>
                <br></br>
               
                <LineChart/>
                </div>      
        </div> 
      </>
    )
  }
  
  export default AdminMain
  