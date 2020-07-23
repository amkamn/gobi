import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import First from "./First";
import List from "./List";
import Single from "./Single";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <First />
      <List />
      <List />
      <Single />
      <List />
      <Footer />
    </div>
  );
}

export default App;
