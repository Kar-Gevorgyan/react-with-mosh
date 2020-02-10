import React from "react";
import {Route, Redirect} from "react-router-dom"
import SideBar from "./sideBar"
import Users from "./users"
import Posts from "./posts"
import NotFound from "../notFound";

const Dashboard = ({ match }) => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <SideBar/>
            <Route path="/admin/users" component={Users}/>
            <Route path="/admin/posts" component={Posts}/>
                {/*<Route path="/admin/not-found" component={NotFound}/>*/}
                {/*<Redirect to="/admin/not-found"/>*/}
        </div>
    );
};

export default Dashboard;
