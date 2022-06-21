import React, { useState } from 'react'
import DatePicker from './DatePicker';
import validator from 'validator'
import './spd_form.css'
import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';
import ImageShow from './ImageShow';
import Input from './Input';

const Form = () => {
  // state for DropDown
  const [patient, setPatient] = useState('patient');
  const [medicine, setMedicine] = useState('medicine');

  //state for InputFields
  const [input, setInput] = useState('');
  const [inputErr, setInputErr] = useState('');

  const handlePatientChange = (e) => {
    console.log(e.target.value);
    setPatient(e.target.value);
  };

  const handleMedicineChange = (e) => {
    console.log(e.target.value);
    setMedicine(e.target.value);
  };

 


  // DropDown 
  const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    )
  }


  // email validation 
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }


  return (
    <div>
      <div className='spd_form_header'>
        Form Structure
        <div className='spd_link_tag'>
          <a href='https://speedum.ca/' className='spd_tag_icon'>
            S
          </a>

        </div>
        <div className='spd_side_bar'>
          MenuBar
        </div>
      </div>
      <div className='spd_input_form'>
        <h2>Input Box</h2>
      <Input/>
      </div>
      <div className='spd_dropD'>
        <Dropdown
          label="Patient "
          options={[
            { label: 'Patient_name', value: 'patientname' },
            { label: 'Patient_id', value: 'patientid' },
            { label: 'Patient_wardno', value: 'patient-wardno' },
          ]}
          value={patient}
          onChange={handlePatientChange}
        />

        <Dropdown
          label="Medicine "
          options={[
            { label: 'Medicine_name', value: 'medicinename' },
            { label: 'Medicine_mfdate', value: 'medicine-mfdate' },
            { label: 'Medicine_expdate', value: 'medicine_expdate' },
          ]}
          value={medicine}
          onChange={handleMedicineChange}
        />
        <p>{patient}</p>
        <p>{medicine}</p>
      </div>
      <div className='spd_datepicker'>
        <DatePicker />
      </div>

      <div className='spd_email'>
        <span>Enter Email: </span><input type="text" id="userEmail"
          onChange={(e) => validateEmail(e)}></input>

      </div>
      <div className='spd_audiop'>
        <AudioPlayer />
      </div>
      <div className='spd_videop'>
        <VideoPlayer/>
      </div>

      <span className='spd_showimage'>
        <ImageShow/>
      </span>

    </div>
  )
}

export default Form;