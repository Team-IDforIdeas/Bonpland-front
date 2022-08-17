import {useState} from 'react';
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ContactForm from "../components/contact/Form/ContactForm";


export default function Contact() {

  const toggleForm = useState(false);

  return (
    <>
      <div className="container">
        <Header />
        
        {
          toggleForm ? <ContactForm /> :  <ContactForm />
        }
        
      </div>
      <Footer />
    </>
  );
}
