import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ContentBox from './components/ContentBox';
import FeatureCard from './components/FeatureCard';
import Testimonial from './components/Testimonial';
import CallToAction from './components/CallToAction';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <main>
        <Sidebar />
        <div className="main-content">
          <Section title="Welcome" content="Welcome to our site!" />
          <ContentBox title="Our Services">
            <FeatureCard title="Web Development" description="Build modern websites." />
            <FeatureCard title="App Development" description="Create powerful mobile apps." />
          </ContentBox>
          <Testimonial name="Apeksha Yechwad" feedback="Great service!" />
          <CallToAction />
          <Section title="Contact Us" content={<ContactForm />} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
