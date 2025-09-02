import { useEffect, useState, useRef } from "react";
import styles from "./Intro.module.css";

export default function Intro() {
   const [animate, setAnimate] = useState(false);
   const sectionRef = useRef(null);

   useEffect(() => {
      const section = sectionRef.current;
      if (!section) return;

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               setAnimate(entry.isIntersecting)
            });
         },
         { threshold: 0.5 }
      );

      observer.observe(section);

      return () => {
         observer.unobserve(section);
      };
   }, []);

   return (
      <>
         <section className={styles.intro} ref={sectionRef}>
            <div className={`${styles.box} ${animate ? styles.animate : ""}`}>
               <h1>Aung Myint Myat</h1>
               <h4>Web Developer</h4>
            </div>
         </section>
      </>
   );
}
