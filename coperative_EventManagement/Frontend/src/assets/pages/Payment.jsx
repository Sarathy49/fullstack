import "../css/Payment.css";
import { Link } from 'react-router-dom';
import CustomNavebar from '../components/CustomNavebar';

const Payment = () => {
  const Alert=()=>{
    alert("Payment Sucessfull, Soon the course will be scheduled ")
  }
  return (
    <>
    <CustomNavebar/>
    <div className='Payment-body'>


    <div className="payment-container">
      <h1>Payment</h1>
      <div className="payment-form">
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" />

        <label htmlFor="expiry">Expiry Date:</label>
        <input type="text" id="expiry" />

        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" />

        <label htmlFor="name">Cardholder Name:</label>
        <input type="text" id="name" />
        <Link to='/details1'>

        <button onClick={Alert} className="pay-button" >Pay Now</button>
        </Link>
      </div>
    </div>
    </div>
    </>
  );
};

export default Payment;