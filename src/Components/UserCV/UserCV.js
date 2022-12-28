import React from 'react'
import './UserCV.css'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import Experience from '../Experience/Experience'
import Contacts from '../Contacts/Contacts'

function UserCV() {
  return (
    <div className='user'>
      <p className='heading'>CV formasi</p>
    <PersonalInfo/>
    <Experience/>
    <Contacts/>
    </div>
  )
}

export default UserCV