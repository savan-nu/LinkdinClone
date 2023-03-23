import { BrowserRouter, Routes, Route } from "react-router-dom";
import db, {
  authentication,
  provider,
  storage,
} from "./constants/firebase_config";
import Login from "./Pages/Login/Longin";
import Home from "./Pages/Home/Home";
import { AuthProvider } from "./context/AuthContext";
import { setDoc, doc,collection, query,getDocs } from "firebase/firestore";

function App() {
  // const putDataOnDataBase = async () => {
  //   console.log("App js");
  //   console.log(db);
  //   const userName = "Savan";
  //   const userMail = "vaghani@gmail.com";
  //   try {
  //     const user = await setDoc(doc(db, "users", "Savan"), {
  //       name: userName,
  //       mail: userMail,
  //       text : "Hello"
  //     });
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  // putDataOnDataBase();

  // const getData = async () => {
  //   const q = query(collection(db, "users"));
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // }
  // getData();
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
