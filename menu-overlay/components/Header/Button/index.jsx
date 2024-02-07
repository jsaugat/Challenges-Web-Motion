import { motion } from 'framer-motion';
import styles from './button.module.scss';

export default function index({isActive, toggleMenu}) {
  return (
    <div className={styles.button}>
        <motion.div 
            className={styles.slider}
            animate={{top: isActive ? "-100%" : "0%"}}
            transition={{ duration: 0.4, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        >
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            > <p>menu</p>
                {/* <PerspectiveText label="Menu"/> */}
            </div>
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            > <p>close</p>
                {/* <PerspectiveText label="Close" /> */}
            </div>
        </motion.div>
    </div>
  )
}

// function PerspectiveText({label}) {
//     return (    
//         <div className={styles.perspectiveText}>
//             <p>{label}</p>
//             <p>{label}</p>
//         </div>
//     )
// }