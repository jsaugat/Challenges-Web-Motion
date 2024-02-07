import styles from "./style.module.scss";
import { motion } from "framer-motion";

const Button = ({ isActive, setIsActive }) => {
  return (
    <div onClick={() => setIsActive(!isActive)} className={styles.button}>
      {/* slider - contains two .el divs */}
      <motion.div
        className="slider"
        animate={{ top: isActive ? "-100%" : "0" }}
      >
        <div className={styles.el}>
          <p>Menu</p>
        </div>
        <div className={styles.el}>
          <p>Close</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Button;
