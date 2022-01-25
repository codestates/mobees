import "./App.css";
import React, { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./pages/Main";
import MainMovieDetail from "./pages/MainMovieDetail";
import MyMovie from "./pages/MyMovie";
import MyMovieDetail from "./pages/MyMovieDetail";
import MyPage from "./pages/MyPage";
import Posting from "./pages/Posting";
import SignUp from "./pages/SignUp";
import { Link, Route, Switch, useHistory } from "react-router-dom";

function App() {
  let [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <Header isLogin={isLogin} setIsLogin={setIsLogin}></Header>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/detail">
          <MainMovieDetail></MainMovieDetail>
        </Route>
        <Route path="/mymovie">
          <MyMovie></MyMovie>
        </Route>
        <Route path="/mymoviedetail">
          <MyMovieDetail></MyMovieDetail>
        </Route>
        <Route path="/mypage">
          <MyPage></MyPage>
        </Route>
        <Route path="/posting">
          <Posting></Posting>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
