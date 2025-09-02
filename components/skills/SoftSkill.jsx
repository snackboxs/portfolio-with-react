import Items from "./Items";
import styles from "./SoftSkill.module.css";
import { useEffect, useRef, useState } from "react";

export default function SoftSkill() {
   const [isVisible, setIsVisible] = useState(false);
   const softSkillRef = useRef(null);

   useEffect(() => {
      const currentBox = softSkillRef.current;

      if (!currentBox) return;

      const observer = new IntersectionObserver(
         (entries) =>
            entries.forEach((entry) => {
               setIsVisible(entry.isIntersecting);
            }),
         { threshold: 0.3 }
      );

      observer.observe(currentBox);

      return () => {
         observer.unobserve(currentBox);
      };
   }, []);
   return (
      <div
         className={`${styles.softSkill} ${isVisible ? styles.visible : ""}`}
         ref={softSkillRef}
      >
         <h2>Soft Skills</h2>
         <ul className={styles.softSkillList}>
            <Items text="Strong communation">
               <i
                  className="fa-solid fa-people-group"
                  style={{ color: "orange" }}
               ></i>
            </Items>
            <Items text="Quick learner">
               <i
                  className="fa-solid fa-graduation-cap"
                  style={{ color: "blue" }}
               ></i>
            </Items>
         </ul>
      </div>
   );
}
