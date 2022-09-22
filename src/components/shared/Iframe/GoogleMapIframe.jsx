const GoogleMapIframe = () => (
  <iframe
    title="google map"
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30350.788486686786!2d-70.2480384!3d-18.0322304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1663769560980!5m2!1ses-419!2spe"
    // width="600"
    // height="450"
    style={{ border: 0, width: "100%", height: "300px" }}
    allowFullScreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  >
    <p>Your browser does not support iframes.</p>
  </iframe>
);

export default GoogleMapIframe;
