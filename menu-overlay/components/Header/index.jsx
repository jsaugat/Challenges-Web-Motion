"use client"
import { useState } from 'react';
import Button from './Button';
import styles from "./style.module.scss"

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={styles.header}>
        <Button isActive={isActive} setIsActive={setIsActive}/>
    </div>
  )
}

export default Header