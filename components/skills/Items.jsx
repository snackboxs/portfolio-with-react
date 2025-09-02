export default function Items({ children, text }) {
   return (
      <li>
         <p>
            {children}
            {text}
         </p>
      </li>
   );
}
