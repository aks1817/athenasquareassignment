import "./App.css";
import NavBar from "./components/NavBar";
import ScrollableText from "./components/ScrollableText";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div
        style={{
          padding: "5%",
          display: "flex",
          flexDirection: "row",

          gridColumnGap: "5%",
        }}
      >
        <div>
          <ScrollableText />
        </div>
        <div
          style={{
            position: "fixed",
            right: "300px",
            paddingTop: "100px",
          }}
        >
          <VideoPlayer />
        </div>
      </div>
    </>
  );
}

export default App;
