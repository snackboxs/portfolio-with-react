import AboutMe from "./About";
import Intro from "./Intro";
import { useEffect, useState, useRef } from "react";
import Skills from "./Skills";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Contact from "./Contact";
import styles from "./Home.module.css";

export default function Home() {
   const [showFooter, setShowFooter] = useState(false);
   const triggerRef = useRef(null);

   useEffect(() => {
      const currentTrigger = triggerRef.current;

      if (!currentTrigger) return;
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               setShowFooter(entry.isIntersecting);
            });
         },
         { threshold: 0 }
      );

      observer.observe(currentTrigger);

      return () => {
         observer.unobserve(currentTrigger);
      };
   }, []);
   return (
      <>
         <Intro />
         <div className={styles.container}>
            <div className={styles.box}>
               <AboutMe />
               <Skills />
               <Education />
               <WorkExperience />
            </div>
         </div>
         <div ref={triggerRef} style={{ height: 400 }}></div>
         <Contact isVisible={showFooter} />
      </>
   );
}
