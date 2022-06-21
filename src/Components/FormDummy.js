import React from 'react'
import AudioPlayer from '../Spd_FormdummyViews/AudioPlayer';
import DatePicker from '../Spd_FormdummyViews/DatePicker';
import EmailInput from '../Spd_FormdummyViews/EmailInput';
import ImageShow from '../Spd_FormdummyViews/ImageShow';
import Input from '../Spd_FormdummyViews/Input';
import { useState } from 'react';
import "./formdummy.css"
import Dropdown from '../Spd_FormdummyViews/DropDown';
// import MobileNoCountry from '../Spd_FormdummyViews/MobileNoCountry';


const FormDummy = () => {
    const [patient, setPatient] = useState('patient');
   


    const handleSubmit = (e) => {
        e.preventdefault(e.target.value);

    }

    const handlePatientChange = (e) => {
        console.log(e.target.value);
        setPatient(e.target.value);
    };

   

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

    return (
        <div className='Container'>
            <div className='heading'>  Form Structure Speedum </div>
            <form className='spd_form_main'>
                <div className='spd_form_input'>
                    <div className='spd_card_block'>
                        <span className='spd_title'>Input Box</span>
                        <Input />
                    </div>
                </div>
                <div className='spd_form_input'>
                    <div className='spd_card_block'>
                        <span className='spd_title'>Email</span>
                        {/* <input className='spd_infield' type="text" placeholder="" /> */}
                        <EmailInput />
                    </div>
                </div>
                <div className='spd_form_input'>
                    <div className='spd_card_block'>
                        <span className='spd_title'>DatePicker</span>
                        {/* <input className='spd_infield' type="text" placeholder="Enter your name" /> */}
                        <DatePicker className='spd_infield' />
                    </div>
                </div>
                <div className='spd_form_input'>
                    <div className='spd_card_block'>
                        <span className='spd_title'>TextArea</span>
                        <textarea refs="message" cols="40" rows="20"
                            className="spd_infield" placeholder="Message" />

                    </div>
                </div>
                <div className='spd_form_input'>
                    <div className='spd_card_block'>
                        <span className='spd_title'> Select Image and Show on Screen </span>
                        <ImageShow />
                    </div>
                </div>
                <div>
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

                          </div>
                {/* <div className='spd_form_input'>
                    <div className='spd_card_block'>
                    <span className='spd_title'>AudioPlayer</span>
                    <AudioPlayer />
                    </div>
                </div> */}
                <div class="footer">
                    <button onClick={() => handleSubmit()} type="submit" className="btn">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormDummy;