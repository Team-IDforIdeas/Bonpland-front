import { useState } from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer/Footer";
import ContactForm from "../components/contact/Form/ContactForm";
import ToggleButton from "../components/contact/ToggleButton";

export default function Contact() {
  const [toggleForm, setToggleForm] = useState(true);

  const handleToggleForm = (value) => {
    setToggleForm(value);
  };

  return (
    <>
      <div className="container">
        <Header />
        <ToggleButton
          handleToggleForm={handleToggleForm}
          toggleForm={toggleForm}
        />
        {toggleForm ? <ContactForm /> : <ContactForm />}
      </div>
      <Footer />
    </>
  );
}
