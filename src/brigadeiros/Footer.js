import { FaShoppingCart } from "react-icons/fa";
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";
import styles from "./Footer.module.css";
import { useState } from "react";

const [conta, setConta] = useState();

function adiciona() {
  setConta(conta + 1);
}
function retira() {
  setConta(conta - 1);
}

const Footer = () => {
  return (
    <div className={styles.list}>
      <footer>
        <ul>
          <li>
            <FaShoppingCart />
          </li>
          <li>
            <VscAdd onClick={adiciona} />
          </li>
          <li>
            <VscChromeMinimize onClick={retira} />
          </li>
          <b>{conta}</b>
        </ul>
      </footer>
    </div>
  );
};
export default Footer;
