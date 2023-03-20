import React from 'react'
import NavbarLoginPage from '../../Components/NavbarLoginPage/NavbarLoginPage'
import styles from "./Login.module.css"
import Section from "../../Components/Section/Section";
import {connect} from "react-redux";
import {signInAPI} from "../../Actions/index";
 function Longin(props) {
  return (
    <div className={styles.contanier}>
      <NavbarLoginPage/>
      <Section signIn = {props.signIn}/>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn : () => dispatch(signInAPI())
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Longin);