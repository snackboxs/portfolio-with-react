import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

export default function About() {
   const [isVisible, setIsVisible] = useState(false);
   const boxRef = useRef(null);
   
   useEffect(() => {
      const currentBox = boxRef.current;

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               setIsVisible(entry.isIntersecting);
            });
         },
         { threshold: 0.3 }
      );
      if (currentBox) {
         observer.observe(currentBox);
      }
      return () => {
         if (currentBox) {
            observer.unobserve(currentBox);
         }
      };
   }, []);
   return (
      <>
         <section
            className={`${styles.about} ${isVisible ? styles.visible : ""}`}
            ref={boxRef}
         >
            <h2>ABOUT ME</h2>
            <p>
               I am a passionate and careful web developer with good knowledge
               of HTML, CSS, JavaScript, and React. I am excited to work on real
               projects, keep learning new web technologies, and improve my
               skills. I am ready to join a team and help by working hard and
               learning quickly.
            </p>
         </section>
      </>
   );
}
