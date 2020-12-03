import React,{useState} from 'react';
import '../style/form.css';
import Logo from '../assets/logo.png';
import { useHistory } from 'react-router-dom';

const Form=()=>{

    const history = useHistory();

    let [occupation,setOccupation]=useState('student');

    const initialState={
        name : "",
        mail:"",
        mobile:"",
        address:"",
        occupation: occupation,
    }

    const [data, setData] = useState(initialState);
    const handleChange = (event) => {
        setData({
        ...data,
        [event.target.name]: event.target.value,
        });
    };

    const handleOccupation=(e)=>{
        setOccupation(e.target.value);
        handleChange(e);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log({...data});
        alert("check console for data passed");
        history.push("/certificate");
       
    }

    return(
        <form method="post" className="bg form-container" onSubmit={handleSubmit}>
            <img className="finance-logo" src={Logo} alt="hola"/>
           
            <label htmlFor="">নাম<span>*</span></label>
            <input type="text" onChange={e=>handleChange(e)} name="name" className="border-gradient"/>
            <br/>

            <label htmlFor="">মোবাইল নম্বর<span>*</span></label>
            <input type="tel" onChange={e=>handleChange(e)} name="mobile" id="" className="border-gradient"/>
            <br/>

            <label htmlFor="">ইমেল<span>*</span></label>
            <input type="email" onChange={e=>handleChange(e)} name="mail" id="" className="border-gradient"/>
            <br/>

            <label htmlFor="">ঠিকানা<span>*</span></label>
            <input type="text" onChange={e=>handleChange(e)} name="address" id="" className="border-gradient"/>
            <br/>

            <label htmlFor="">পেশা<span>*</span></label>
            <select value={occupation} onChange={e=> handleOccupation(e)} name="occupation" className="border-gradient">
                <option value="student">Student</option>
                <option value="housewife">housewife</option>
                <option value="job">Job</option>
                <option value="business">Business</option>
                <option value="retired">Retired</option>
            </select>
            <br/>

            <input type="submit"  value="সাইন ইন করুন" className="submitBtn" />

        </form>
       
    );
}

export default Form;