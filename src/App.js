import logo from "./logo.svg";
import "./App.css";
import { H1, H2, Text, LabelText } from "./components/typography/typography";
import LandingPage from "./sections/landing-page/index";

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
