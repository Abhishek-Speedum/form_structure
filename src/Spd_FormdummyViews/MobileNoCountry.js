import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {useState} from 'react';
import './spd_form.css'


const MobileNoCountry = () => {


  const [value, setValue] = useState()
  return (
    <div className='spd_input'>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        className="spd_mobileno" />
    </div>
  )
}
export default MobileNoCountry;