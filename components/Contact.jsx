import styles from "./Contact.module.css";

export default function Contact({ isVisible }) {
   return (
      <footer className={`${styles.footer} ${isVisible ? styles.visible : ""}`}>
         <h3>CONTACT US</h3>
         <address>
            <ul>
               <li>
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:09967033673">09-967033673</a>
               </li>
               <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>
                     Mi Chaung Aing Ywar Thit, Shwe Pyi Thar Township, Yangon
                  </span>
               </li>
               <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:myatta003@gmail.com">myatta003@gmail.com</a>
               </li>
               <li>
                  <i className="fa-brands fa-viber"></i>
                  <a href="viber://chat?number=+959967033673">+959967033673 (Viber)</a>
               </li>
               <li>
                  <i class="fa-brands fa-github"></i>
                  <a href="https://github.com/snackboxs">GitHub</a>
               </li>
            </ul>
         </address>
      </footer>
   );
}
