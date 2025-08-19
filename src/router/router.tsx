import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../Pages/Home";
import { AboutPomodoro } from "../Pages/About";
import { NotFound } from "../Pages/NotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-pomodoro" element={<AboutPomodoro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
