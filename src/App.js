import "./App.scss";
import "./scss/styles.scss";

import Hero from "./components/hero/Hero";
import Solutions from "./components/solutions/Solutions";
import Testimonials from "./components/testimonials/Testimonials";
import ContactForm from "./components/contact-form/ContactForm";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Solutions />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
