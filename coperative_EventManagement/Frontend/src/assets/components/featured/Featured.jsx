import "../../css/Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='cntainer'>
          <h1>SERVICES</h1> 
          <p> To help you envision your dream event</p>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured