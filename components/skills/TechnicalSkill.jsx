import styles from "./TechnicalSkill.module.css";
import Items from "./Items";
import { useEffect, useRef, useState } from "react";
import muiImage from "../../img/mui.png"
import photoshopImage from '../../img/photoshop.png';
import illustratorImage from '../../img/illustrator.png';

export default function TechnicalSkill() {
   const [isVisible, setIsVisible] = useState(false);
   const technicalSkillRef = useRef(null);

   useEffect(() => {
      const currentBox = technicalSkillRef.current;

      if (!currentBox) return;

      const observer = new IntersectionObserver(
         (entries) =>
            entries.forEach((entry) => {
               setIsVisible(entry.isIntersecting);
            }),
         { threshold: 0.3}
      );

      observer.observe(currentBox);

      return () => {
         observer.unobserve(currentBox);
      };
   }, []);
   return (
      <div
         className={`${styles.technicalSkill} ${
            isVisible ? styles.visible : ""
         }`}
         ref={technicalSkillRef}
      >
         <h2>TECHNICAL SKILLS</h2>
         <ul className={styles.technicalSkillList}>
            <Items text="Html">
               <i className="fa-brands fa-html5" style={{ color: "red" }}></i>
            </Items>
            <Items text="Css">
               <i className="fa-brands fa-css" style={{ color: "#264de4" }}></i>
            </Items>
            <Items text="Javascript">
               <i
                  className="fa-brands fa-square-js"
                  style={{ color: "yellow" }}
               ></i>
            </Items>
            <Items text="Bootstrap">
               <i
                  className="fa-brands fa-bootstrap"
                  style={{ color: "#7952b3" }}
               ></i>
            </Items>
            <Items text="React">
               <i
                  className="fa-brands fa-react"
                  style={{ color: "#61dafb" }}
               ></i>
            </Items>
            <Items text="Material UI">
               <img
                  src={muiImage}
                  className={styles.img}
                  alt="MuiImage"
                  style={{ borderRadius: "5px" }}
               />
            </Items>
            <Items text="Git">
               <i
                  className="fa-brands fa-git-alt"
                  style={{ color: "orange" }}
               ></i>
            </Items>
            <Items text="Nodejs">
               <i class="fa-brands fa-node"></i>
            </Items>
            <Items text="SQLite">
               <i class="fa-solid fa-database"></i>
            </Items>
            <Items text="Adobe Photoshop">
               <img
                  src={photoshopImage}
                  className={styles.img}
                  alt="PhotoshopImg"
                  style={{ borderRadius: "5px" }}
               />
            </Items>
            <Items text="Adobe Illustrator">
               <img
                  src={illustratorImage}
                  className={styles.img}
                  alt="Illustrator"
                  style={{ borderRadius: "5px" }}
               />
            </Items>
         </ul>
      </div>
   );
}