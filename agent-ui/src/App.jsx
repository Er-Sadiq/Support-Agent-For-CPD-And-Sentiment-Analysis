import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Querybox from "./components/Querybox";
import Chatbox from "./components/Chatbox";
import axios from "axios";

function App() {
  const [sw, setSw] = useState(true); // State to switch between Querybox and Chatbox
  const [url, setUrl] = useState(""); // State to store the URL

  const handleUrlSubmit = async (e) => {
    e.preventDefault();

    // Validate the URL
    if (!url || !url.startsWith("https")) {
      alert("Please enter a valid HTTPS URL.");
      return;
    }

    try {
      // Send a POST request with the URL as a parameter
      const res = await axios.post("http://localhost:8080/api", null, {
        params: { url },
      });

      // Handle success and error cases
      if (res.status === 200) {
        alert("Data successfully scraped!"); // Provide meaningful feedback
        setSw(false); // Switch to the Chatbox component
      } else {
        alert("Error scraping data from the URL.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the URL.");
    }
  };

  return (
    <div className="w-screen h-screen bg-p flex flex-col items-center ">
      <Navbar />
      <main className="w-full flex-grow flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden">
        <span className="flex justify-center items-center border-[1px] border-a py-1 px-2 rounded-lg bg-[#2d3044] my-auto">
          <p className="rounded-lg text-xs bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Introducing Support.Agent for customer problem diagnosis by Dev@Er-Sadiq
          </p>
        </span>
        {sw ? (
          <Querybox handleUrlSubmit={handleUrlSubmit} setUrl={setUrl} url={url} />
        ) : (
          <Chatbox />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
