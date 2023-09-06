import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainComponent from "./components/landing-page/MainComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;
