import React from 'react'
import { InfoBar, InfoContainer, InfoMenu, InfoItems, InfoLinks, InfoLinksIcon } from './infobarElements'
//icons
import {FaPhoneAlt} from "@react-icons/all-files/fa/FaPhoneAlt"
import {FaMapMarkerAlt} from "@react-icons/all-files/fa/FaMapMarkerAlt"
import {FaEnvelope} from "@react-icons/all-files/fa/FaEnvelope"
import {FaMobile} from "@react-icons/all-files/fa/FaMobile"

const Infobar = () => {
  return (
    <InfoBar>
    <InfoContainer id='info'>
      <InfoMenu>
        <InfoItems><InfoLinks to="/contact"><InfoLinksIcon><FaMapMarkerAlt/></InfoLinksIcon>Veronica Crossing 625, Kutchchester 190 02</InfoLinks></InfoItems>
        <InfoItems><InfoLinks to="/contact"><InfoLinksIcon><FaMobile/></InfoLinksIcon>698 888 8888</InfoLinks></InfoItems>
        <InfoItems><InfoLinks to="/contact"><InfoLinksIcon><FaPhoneAlt/></InfoLinksIcon>262 777 7777</InfoLinks></InfoItems>
        <InfoItems><InfoLinks to="/contact"><InfoLinksIcon><FaEnvelope/></InfoLinksIcon>info@company.com</InfoLinks></InfoItems>
      </InfoMenu>
    </InfoContainer>
    </InfoBar>
  )
}

export default Infobar