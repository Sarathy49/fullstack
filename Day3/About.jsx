import CustomNavebar from "../components/CustomNavebar"
import Back from "../components/common/Back"
import img from "../images/about.jpg"
import Heading from "../components/common/Heading"
import "../css/about.css"
import Footer from "../components/common/footer/Footer"

const About = () => {
  return (
    <div>
      <header>
        <CustomNavebar />

      </header>
      <main>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='cotainer flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>  Welcome to the Evento , Event Planner Ltd is an event logistics and marketing company which was formed back in 2013.
               The company offers A-Z event planning services from a team of experienced and energetic event planners, suppliers, venues and more. 
               One of the main reasons behind the success of Event Planner is the fact that the team does not charge fees to its clients! With the number of events we organise, 
               Event Planner Ltd does not need to add exorbitant fees and mark-ups to make its profit margins. This ensures that our clients list, which is constantly growing, make regular use of our services.</p>
            
            <button className='btn2'>More About Us</button>
          </div>
          {/* <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div> */}
        </div>
      </section>
      <div>
        <Footer/>
      </div>

      </main>
    </div>
    
  )
}

export default About