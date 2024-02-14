import "../css/eventreg.css"
function EventReg() {
  return (
    <form className="form">
  <p className="title">Apply for Event </p>
  <p className="message">apply now and get full access to our event </p>
  <div className="flex">
    <label>
      <input required="" placeholder="" type="text" className="input" />
      <span>Firstname</span>
    </label>
    <label>
      <input required="" placeholder="" type="text" className="input" />
      <span>Lastname</span>
    </label>
  </div>
  <label>
    <input required="" placeholder="" type="email" className="input" />
    <span>Email</span>
  </label>
  <label>
    <input required="" placeholder="" type="password" className="input" />
    <span>Amount</span>
  </label>
  
  <button className="submit">Submit</button>
  
</form>
  )
}

export default EventReg