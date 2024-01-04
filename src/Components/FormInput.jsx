import { useState } from 'react';
import '../Styles/formInput.css';

const FormInput = (props) => {

    const {id,label,errorMessage,onChange,...inputprops}=props;
    
    //highlighting the input after taking out the cursor from that .
    const[focused,setFocused]=useState(false);
    const handleFocus=()=>{
        setFocused(true);
    }

    return (
            <div className="form-input">
                <label>{label}</label>
                <input {...inputprops} 
                onChange={onChange} 

                //* on moving cursor it shows error 
                onBlur={handleFocus}
                focused={focused.toString()}>
                </input>
                <span>{errorMessage}</span>
            </div>
         )
}
 
export default FormInput;