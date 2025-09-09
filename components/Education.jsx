import styles from "./Education.module.css";
import { useEffect, useRef, useState } from "react";

export default function Education() {
   const [isVisible, setIsVisible] = useState(false);
   const educationRef = useRef(null);

   useEffect(() => {
      const currentBox = educationRef.current;

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
         className={`${styles.education} ${isVisible ? styles.visible : ""}`}
         ref={educationRef}
      >
         <h2>EDUCATION</h2>
         <div className={styles.flexbox}>
            <ul>
               <li>
                  <article>
                     <h4>YADANARBON UNIVERSITY</h4>
                     <p>
                        final year of Archaeology (<i>2017-2020</i> )
                     </p>
                  </article>
               </li>
               <li>
                  <article>
                     <h4>GCTI</h4>
                     <p>
                        Graphic Design Course ( <i>2023-2024</i> )
                     </p>
                  </article>
               </li>
               <li>
                  <article>
                     <h4>TIP TOP</h4>
                     <p>
                        English Basic Course ( <i>2019</i> )
                     </p>
                  </article>
               </li>
               <li>
                  <article>
                     <h4>FAIRWAY TECHNOLOGY</h4>
                     <p>
                        Professional Web Developer 2 ( <i>2025</i> )
                     </p>
                  </article>
               </li>
            </ul>
         </div>
      </div>
   );
}
