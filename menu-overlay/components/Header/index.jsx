"use client";

import { useState } from "react";
import Button from "./Button";
import styles from "./header.module.scss";

const index = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.header}>
      <Button
        isActive={isActive}
        toggleMenu={() => {setIsActive(!isActive)}}
      />
    </div>
  );
};

export default index;
