import React, { useState } from 'react'
import { graphql } from 'gatsby';
import styled from "styled-components";
import PrimarycComponents from '../../components/layouts/primarycComponents'
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {FaPhoneAlt} from "@react-icons/all-files/fa/FaPhoneAlt"
import {FaMapMarkerAlt} from "@react-icons/all-files/fa/FaMapMarkerAlt"
import {FaEnvelope} from "@react-icons/all-files/fa/FaEnvelope"
import {FaMobile} from "@react-icons/all-files/fa/FaMobile"

const MapWrapper = styled(MapContainer)`
  height: 400px;
  margin: 25px 100px;
  border-radius: 10px;
  .leaflet-control { z-index: 0 !important}
  .leaflet-pane { z-index: 0 !important}
  .leaflet-top, .leaflet-bottom {z-index: 0 !important}

  @media only screen and (max-width: 1200px) {
      margin: 25px 70px;
  }
  @media only screen and (max-width: 1024px) {
      margin: 25px 50px;
  }
  @media only screen and (max-width: 900px) {
      margin: 25px 25px;
      height: 250px;
  }
`
const Contact = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
  padding: 0 100px;

  @media only screen and (max-width: 1200px) {
      padding: 0 70px;
  }
  @media only screen and (max-width: 1024px) {
      padding: 0 50px;
  }
  @media only screen and (max-width: 900px) {
      padding: 0 25px;
  }
`
//Contact info
const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 25px 25px 0;
`
const ContactHeader = styled.div`
  padding-bottom: 10px;
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: 500;

  @media only screen and (max-width: 1200px) {
      font-size: 1.2rem;
  }
`
const ContactLinks = styled.div`
  padding-bottom: 15px;
  width: fit-content;
  margin-left: 5px;
`
const ContactLinksWrapper = styled.a`
  display: flex;
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-size: 1.1rem;

  @media only screen and (max-width: 1200px) {
      font-size: 1rem;
  }

  :hover{
      color: #F7931E;
      -webkit-transition: 0.5s;
      -moz-transition: 0.5s;
      -o-transition: 0.5s;
      transition: 0.5s;
  }
`
//Scedule
const ContactScedule = styled.div`
  display: flex;
  flex-direction: row;
`
const ContactSceduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`
const ContactSceduleInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px 5px 0;
`
//Contact form
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  
`
const ContactInput = styled.input`
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 0.9rem;

  :focus{
    outline: none !important;
    border: 2px solid #07407B;
    box-shadow: 0 0 5px #07407B;
  }
`
const ContactSelect = styled.select`
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  border: 1px solid black;
  background: none;
  font-size: 0.9rem;
  cursor: pointer;
  :hover{
    outline: none !important;
    border: 2px solid #07407B;
    box-shadow: 0 0 5px #07407B;
  }
`
const ContactTextarea = styled.textarea`
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  border: 1px solid black;
  resize: none;
  font-size: 0.9rem;
  :focus{
    outline: none !important;
    border: 2px solid #07407B;
    box-shadow: 0 0 5px #07407B;
  }
`
const ContactButton = styled.button`
  width: fit-content;
  padding: 10px 40px;
  margin: 5px 0;
  border-radius: 10px;
  background: #F7931E;
  color: white;
  border: none;
  text-transform: uppercase;
  cursor: pointer;

  :hover{
    opacity: 0.8;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
 }
`
const ContactMessage = styled.div`
  font-size: 0.9rem;
  padding: 10px 0 5px 0;
  display: ${({ start }) => (start ? 'flex' : 'none')};
  overflow: ${({ start }) => (start ? 'overflow' : 'hidden')};
  color: ${({ sent }) => (sent ? '#F7931E' : 'red')};
`

const ContactPage = ({ data }) => {
  //Data
  const servicesData = data.allMarkdownRemark.nodes
  //Forms
  let timer;
  const[start, setStart] = useState(false)
  const[sent, setSent] = useState(false)
  const THIS_PAGE = "/epikoinonia"
  const [formData, setFormData] = useState({
    name: "", 
    email: "",
    phone: "",
    selectServices: "DEFAULT",
    message: "", 
  })
  const [statusText, setStatusText] = useState("")
  const handleChange = event => {
      const key = event.target.name
      const updatedFormValue = event.target.value
      const newFormData = {...formData, [key]: updatedFormValue}
      setFormData(newFormData)
  }
  const handleSubmit = event => {
    event.preventDefault()
    const initialState = {
      name: "", 
      email: "",
      phone: "",
      selectServices: "DEFAULT",
      message: "", 
    }
    
    const form = event.target
    fetch(THIS_PAGE, {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            "form-name": form.getAttribute('name'),
            ...formData,
          }).toString(),
    }).then(response => {
        clearTimeout(timer)
        if (response.ok){
          setFormData(initialState)
          setStatusText("Σας ευχαριστούμε για το μύνημα σας.")
          runTimer()
          setSent(true)
          setStart(true)
        }
        else{
          setStatusText("Σφάλμα: δοκιμάστε ξανά.") 
          runTimer()
          setSent(false) 
          setStart(true)
        } 
       
        
    }).catch(error => console.log(`Error:${error}`))
  }

  const runTimer = () =>{
    timer = setTimeout(() => {
      setStatusText("")
      setSent(false)
      setStart(false)
    }, 10*1000)
  }
  
  return (
    <PrimarycComponents>
      <MapWrapper center={[40.144307,22.399911]} zoom={16} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[40.144307,22.399911]}>
            <Popup>
              <a href="https://goo.gl/maps/BEo5P3j6GZ4kNoTR7" target="_blank" rel="noopener noreferrer">Λεωφ. Λαυρίου 101, Παιανία 190 02</a>
            </Popup>
          </Marker>
        </MapWrapper>
      <Contact>
        <ContactItems>
          <ContactHeader>Contact Information</ContactHeader>
          <ContactLinksWrapper href="https://goo.gl/maps/tkNGUHigPBtYySd48" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt/><ContactLinks>Veronica Crossing 625, <br/> Kutchchester 190 02</ContactLinks></ContactLinksWrapper>
          <ContactLinksWrapper href="tel: 6988888888" target="_blank" rel="noopener noreferrer"><FaMobile/><ContactLinks>698 888 8888</ContactLinks></ContactLinksWrapper>
          <ContactLinksWrapper href="tel: 2627777777" target="_blank" rel="noopener noreferrer"><FaPhoneAlt/><ContactLinks>262 777 7777</ContactLinks></ContactLinksWrapper>
          <ContactLinksWrapper href="mailto: info@company.com" target="_blank" rel="noopener noreferrer"><FaEnvelope/><ContactLinks>info@company.com</ContactLinks></ContactLinksWrapper>
        </ContactItems>
        <ContactItems>
          <ContactHeader>Business Hours</ContactHeader>
            <ContactScedule>
              <ContactSceduleContainer>
                <ContactSceduleInfo>Mon:</ContactSceduleInfo>
                <ContactSceduleInfo>Tue:</ContactSceduleInfo>
                <ContactSceduleInfo>Wed:</ContactSceduleInfo>
                <ContactSceduleInfo>Thu:</ContactSceduleInfo>
                <ContactSceduleInfo>Fri:</ContactSceduleInfo>
                <ContactSceduleInfo>Sat:</ContactSceduleInfo>
                <ContactSceduleInfo>Sun:</ContactSceduleInfo>
              </ContactSceduleContainer>
              <ContactSceduleContainer>
                <ContactSceduleInfo>8:30 - 17:00</ContactSceduleInfo>
                <ContactSceduleInfo>8:30 - 19:00</ContactSceduleInfo>
                <ContactSceduleInfo>8:30 - 17:00</ContactSceduleInfo>
                <ContactSceduleInfo>8:30 - 19:00</ContactSceduleInfo>
                <ContactSceduleInfo>8:30 - 19:00</ContactSceduleInfo>
                <ContactSceduleInfo>8:30 - 15:00</ContactSceduleInfo>
                <ContactSceduleInfo>Closed</ContactSceduleInfo>
              </ContactSceduleContainer>
            </ContactScedule>
        </ContactItems>
        <ContactItems>
          <ContactHeader>Contact Form</ContactHeader>   
          {/* Services */}
          <ContactForm name="services" method="POST"  onSubmit={e => handleSubmit(e)} action={THIS_PAGE} data-netlify="true" netlify-honeypot="bot-field">
            <ContactMessage start={start} sent={sent} id="btn">{statusText}</ContactMessage>
            <ContactInput type="hidden" name="form-name" value="services"/>
            <input style={{display: "none"}} name="bot-field" />
            <ContactInput type="text" name="name" id="name"  value={formData.name} onChange={e => handleChange(e)} placeholder="Name" required/>
            <ContactInput type="email" name="email" id="email" value={formData.email} onChange={e => handleChange(e)} placeholder="Email" required/>
            <ContactInput type="tel" name="phone" id="phone" value={formData.phone} onChange={e => handleChange(e)} placeholder="Phone" pattern="[0-9]{10}" required/>
            <ContactSelect name="selectServices" id="selectServices" value={formData.selectServices} onChange={e => handleChange(e)} required>
              <option value="DEFAULT" disabled>-- I'm interested in: --</option>
              {servicesData.map((services) => (
                <option key={services.id}>{services.frontmatter.title}</option>
              ))}
            </ContactSelect>
            <ContactTextarea name="message" value={formData.message} onChange={e => handleChange(e)} rows="5" placeholder="Message" required/>
            <div data-netlify-recaptcha="true"></div>
            <ContactButton type="submit">Sumbit</ContactButton>
          </ContactForm>         
        </ContactItems>
      </Contact>
    </PrimarycComponents>
  )
}

export default ContactPage

export const Head = () => <title>Contact - Company Name</title>

export const query = graphql`
  query ServicesQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/theservices/"}}) {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`