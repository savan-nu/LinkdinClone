import React , {useEffect ,useContext}from "react";
import Layout from "../../Components/Layout/Layout";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Home.module.css";
import AuthContext from '../../context/AuthContext';
import Loader from "../../Components/Layout/Loader/Loader";

export default function Home() {
  const {user, setUser} = useContext(AuthContext);
  useEffect(()=> {
    const data  = localStorage.getItem('userLogin');
    if(data !== undefined){
      const userData = JSON.parse(data);
      console.log(userData);
      setUser(userData);
    }
  },[])
  return (
  
    <div className={styles.homepage}>
     {console.log(user)}
      <Navbar />
      <Layout />
    </div>
  );
}
