import React from "react";

import { ThemeProvider } from "./context/themeContext/themeContext";

import { About, Footer, Header, Skills, Work } from "./container/index";
import { Clients, Navbar } from "./components";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen max-w-screen bg-primary relative overflow-x-hidden">
        <Navbar />
        <Header />
        <About />
        <Skills />
        {/* <Clients /> */}
        <Work />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
