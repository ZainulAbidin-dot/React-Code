import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register } from "./components/Login-Register.tsx";

import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Footer from "./components/Footer";
import Menu from "./components/MenuView";

import AdminHeader from "./components/admin/AdminHeader";
import AdminPhotoUpload from "./components/admin/AdminPhotoUpload";
import AdminRestaurant from "./components/admin/AdminRestaurant";
import AdminMenuView from "./components/admin/AdminMenuView";
import AdminEditMenu from "./components/admin/AdminEditMenu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: false,
    };
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    return (
      <div className="App">
        <Router>
          <div className="App">
            <Routes>
              <Route path="/">
                <Route
                  exact
                  path="/"
                  element={
                    <>
                      <Header />
                      <Restaurant />
                      <Menu />
                      <Footer />
                    </>
                  }
                />
              </Route>

              <Route path="/admin">
                <Route
                  exact
                  path="/admin"
                  element={
                    <>
                      <AdminHeader />
                      <AdminPhotoUpload />
                      <AdminRestaurant />
                      <AdminMenuView />
                      <AdminEditMenu />
                    </>
                  }
                />
              </Route>

              <Route path="/">
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
