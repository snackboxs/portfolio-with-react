import styles from "./WorkExperience.module.css";
import { useEffect, useRef, useState } from "react";

export default function WorkExperience() {
   const [isVisible, setIsVisible] = useState(false);
   const workExperienceRef = useRef(null);

   useEffect(() => {
      const currentBox = workExperienceRef.current;

      if (!currentBox) return;

      const observer = new IntersectionObserver(
         (entries) =>
            entries.forEach((entry) => {
               setIsVisible(entry.isIntersecting);
            }),
         { threshold: 0.2 }
      );

      observer.observe(currentBox);

      return () => {
         observer.unobserve(currentBox);
      };
   }, []);
   return (
      <div
         className={`${styles.workExperience} ${
            isVisible ? styles.visible : ""
         }`}
         
         ref={workExperienceRef}
      >
         <h2>WORK EXPERIENCE</h2>
         <article>
            <h4>GOLD POWER CO.,LTD.</h4>
            <h4 style={{ display: "flex", justifyContent: "space-between" }}>
               Graphic Designer
               <i style={{ fontWeight: 300 }}>10-02-2025 - TODAY</i>
            </h4>
            <ul id="experienceList">
               <li>
                  Created car sticker designs for vehicles based on customer
                  requests
               </li>
               <li>
                  Designed vinyl stickers for shops, events, and promotions
               </li>
               <li>
                  Made eye-catching social media post designs for Facebook and
                  Instagram
               </li>
               <li>
                  Designed simple and professional logos for businesses and
                  brands
               </li>
               <li>
                  Created gondola shelf stickers to attract customers in retail
                  stores
               </li>
               <li>
                  Designed invitation cards for housewarming and special events
               </li>
               <li>
                  Edited passport photos and portraits, adjusting lighting and
                  colors
               </li>
               <li>
                  Worked closely with marketing teams to keep designs on-brand
               </li>
               <li>
                  Completed design projects on time using Adobe Photoshop and
                  Illustrator
               </li>
            </ul>
         </article>
      </div>
   );
}
