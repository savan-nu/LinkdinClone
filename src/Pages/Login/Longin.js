import React, {useContext}from "react";
import NavbarLoginPage from "../../Components/NavbarLoginPage/NavbarLoginPage";
import styles from "./Login.module.css";
import Section from "../../Components/Section/Section";
import { connect } from "react-redux";
import AuthContext from "../../context/AuthContext";
import {
  signInAPI,
} from "../../Actions/index";
function Longin(props) {
  const {setUser} = useContext(AuthContext);
  
  props.user && setUser(props.user)
  return (
    <div className={styles.contanier}>
      <NavbarLoginPage />
      <Section
        signIn={props.signIn}
        user={props.user}
      />

    </div>
  );
}
const mapStateToProps = (state) => {
  return { user: state.userState.user };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signInAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Longin);
