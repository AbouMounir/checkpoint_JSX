import img_thank_you from '.././illustration-thank-you.svg';
import './part_two.css'

function PartTwo() {
    return (
      <div className='part_two'>
        <div className='container'>
          <img src={img_thank_you} className='img_thank_you' alt='img_thank_you' />
          <div> 
            <p className='result'> You selected 4 out of 5 </p>
          </div>
          <p> Thank you!</p>
          <p className='text'> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>

      </div>
    );
}

export default PartTwo ;