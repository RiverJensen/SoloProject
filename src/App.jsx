import "./App.css";
import UserBoxData from "./component/UserBoxData";

function App({ initialData }) {
  return <UserBoxData initialUserData={initialData} />;
}

export default App;
