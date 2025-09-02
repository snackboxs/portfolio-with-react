import SoftSkill from "./skills/SoftSkill";
import TechnicalSkill from "./skills/TechnicalSkill";
import styles from "./Skills.module.css";

export default function Skills() {
   return (
      <div className={styles.container}>
         <TechnicalSkill />
         <SoftSkill />
      </div>
   );
}
