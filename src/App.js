// import { usersData } from "../../consts/userData";
// import UsersTable from "./components/usersTable/UserTable";
// import TableUser from './components/tableUsers/TableUser';
import HomePageUsers from './components/homePage/User.MainView';

const App = () => {
  // רינדור של הקומפוננטה והעברת הערכים כprops
  // return <UsersTable usersData={usersData}/>
  return (
    <div>
    {/* <TableUser></TableUser> */}
      <HomePageUsers></HomePageUsers>
      
   </div>
  );
   

}

export default App;
