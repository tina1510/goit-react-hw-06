import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = ({ date: { name, number, id }, onDelete }) => {
    return (
        <div className={css.contactContainer}> 
            <div className={css.contactText}>
             <p className={css.text}> <FaUser />{ name}</p>
            <p className={css.text}> <FaPhoneAlt />
{ number}</p>
            </div>
            <button  className={css.btnDel} onClick={()=> onDelete(id)}>Delete</button></div>
            
  
)
}
export default Contact

