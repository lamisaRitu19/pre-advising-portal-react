import "./App.css";
import AddCourses from "./Components/AddCourses/AddCourses";
import ChangeCapacity from "./Components/ChangeCapacity/ChangeCapacity";
import Home from "./Components/Home/Home";
import MakePlan from "./Components/MakePlan/MakePlan";
import Navbar from "./Components/Navbar/Navbar";
import SelectCourses from "./Components/SelectCourses/SelectCourses";
import ViewCapacity from "./Components/ViewCapacity/ViewCapacity";
import ViewCourses from "./Components/ViewCourses/ViewCourses";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      {/* <AddCourses></AddCourses> */}
      {/* <ViewCourses></ViewCourses> */}
      <MakePlan></MakePlan>
      {/* <SelectCourses></SelectCourses> */}
      {/* <ChangeCapacity></ChangeCapacity> */}
      {/* <ViewCapacity></ViewCapacity> */}
    </div>
  );
}

export default App;
