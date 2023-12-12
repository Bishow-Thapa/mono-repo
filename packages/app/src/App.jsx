import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const RemoteContactApp = lazy(() => import("contactTest/ContactTest"));
const RemoteMailApp = lazy(() => import("mailTest/InternalMail"));
const RemoteCalenderApp = lazy(() => import("calenderTest/NepaliCalender"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <Suspense fallback={<div>Loading</div>}>
              <RemoteContactApp />
              <RemoteMailApp />
              <RemoteCalenderApp />
            </Suspense>
          }
        />
        <Route path="/mail" element={<RemoteMailApp />} />
        <Route path="/calender" element={<RemoteCalenderApp />} />
        <Route path="/contact" element={<RemoteContactApp />} />
      </Routes>
    </>
  );
}

export default App;
