import "./App.scss";
import "./scss/styles.scss";

import Hero from "./components/hero/Hero";
import Solutions from "./components/solutions/Solutions";
import Testimonials from "./components/testimonials/Testimonials";
import ContactForm from "./components/contact-form/ContactForm";
function App() {
  return (
    <div className="App">
      <Hero />
      <Solutions />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;
