import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignIn from "./Pages/auth/SignIn";
import SignUp from "./Pages/auth/SignUp";
import UserLayout from "./layouts/UserLayout";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import TravelPackages from "./Pages/TravelPackages/TravelPackages";
import TravelPackage from "./Pages/TravelPackages/TravelPackage";
import Hotels from "./Pages/Hotels/Hotels";
import Hotel from "./Pages/Hotels/Hotel";
import UserProfile from "./Pages/UserProfile";
import NotFound from "./Pages/NotFound";
import DashboardLayout from "./layouts/DashboardLayout";
import ManageHotels from "./Pages/Dashboard/ManageHotels";
import ManageTravelPackages from "./Pages/Dashboard/ManageTravelPackages";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<UserLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="travelpackages" element={<TravelPackages />} />
            <Route path="travelpackages/:id" element={<TravelPackage />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="hotels/:id" element={<Hotel />} />
            <Route path="profile/:userId" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="manage-hotels" element={<ManageHotels />} />
            <Route path="manage-packages" element={<ManageTravelPackages />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;