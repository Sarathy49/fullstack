import { useState } from "react";
import img from "../images/pricing.jpg";
import Back from "../components/common/Back";
import "../css/contact.css";
import Footer from "../components/common/footer/Footer";
import CustomNavebar from "../components/CustomNavebar";


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    

  };

  return (
    <>
    <CustomNavebar/>
      
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Help & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={handleSubmit}>
            <h4>Fill up The Form</h4> <br />
            <div>
              <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type='text'
              placeholder='Subject'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              cols='30'
              rows='10'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Contact;
