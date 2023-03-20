import React from "react";
import style from "./Footer.module.css"
export default function Footer() {
  return (
    <div className={style.footer}>
      <ul>
        <li>About</li>
        <li>Accessibility</li>
        <li>Help Center</li>
      
      </ul>
      <ul>
        <li>Privacy & Terms</li>
        <li>Ad Choices</li>
      </ul>
      <ul>
        <li>Advertising</li>
        <li>Business Services</li>
      </ul>
      
    </div>
  );
}
