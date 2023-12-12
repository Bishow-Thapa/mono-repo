import { lazy, Suspense } from "react";
import "./App.css";
// import ContactTest from "contactTest/ContactTest";

const RemoteContactApp = lazy(() => import("contactTest/ContactTest"));
const RemoteMailApp = lazy(() => import("mailTest/InternalMail"));
const RemoteCalenderApp = lazy(() => import("calenderTest/NepaliCalender"));

function App() {
  return (
    <>
      {/* <h1>Main App</h1> */}
      {/* <ContactTest /> */}
      <Suspense fallback={<div>Loading</div>}>
        <RemoteContactApp />
        <RemoteMailApp />
        <RemoteCalenderApp />
      </Suspense>
    </>
  );
}

export default App;
