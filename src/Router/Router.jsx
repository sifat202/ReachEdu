import { createBrowserRouter } from "react-router"
import Homelayout from "../Homelayout/Homelayout"
import Home from "../Pages/Home"
import Tracks from "../Pages/Tracks";
import Course from "../Pages/Course";
import MoreCourses from "../Pages/MoreCourses";
import Login from "../Authlayout/Login";
// import Register from "../Authlayout/Register";

const router = createBrowserRouter([
{
    path:"/",
    element:<Homelayout></Homelayout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'tracks',
            element:<Tracks>
            </Tracks>
        },
        {
            path:'course',
            element:<Course></Course>
        },
        {
            path:'more-courses',
            element:<MoreCourses></MoreCourses>
        },
        {
            path:'login',
            element:<Login></Login>
        },
      
    ]
}
])
export default router;