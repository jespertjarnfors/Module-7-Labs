import "./App.css";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { AppRoutes } from "./routes/AppRoutes";


function App() {


  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
        {/* <NavBar></NavBar> */}
    <AppRoutes>
    </AppRoutes>
    </>
  );
}

export default App;
