import EmailList from "./EmailList";
import EmailDetails from "./EmailDetails";

function Index() {
  return (
    <div style={{ display: "flex" }}>
      <EmailList />
      <EmailDetails />
    </div>
  );
}

export default Index;
