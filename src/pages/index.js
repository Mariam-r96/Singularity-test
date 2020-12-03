import React from 'react';
import '../style/index.css';
import Logo from '../assets/logo.png';
import { useHistory } from 'react-router-dom';
// import Form from './form';

const Sohayota=()=>{

    const history = useHistory();

    const handleClick = () => {
        history.push("/form");
    }

    return(
        <section className="section-gap bg">
            <img className="finance-logo" src={Logo} alt="hola"/>
            <h1>আমরা মানুষ <br/><span>শুধু নামে না, কাজেও মানুষ হওয়াটা জরুরী</span></h1>
            <p>আমাদের চারপাশে ছড়িয়ে আছে অসংখ্য দুস্থ , অসহায় ও সুবিধা বঞ্চিত মানুষ , যাদের জন্য শীতকাল একটি দুঃস্বপ্নের মত । যারা অপেক্ষায় থাকে আমাদের <span>সহায়তা</span> পাবার আশায় । আর তাই আমাদের এবারের আয়ােজন <span>বিডি ফাইন্যান্স সহায়তা ।</span></p>
            <p>আর্থিক নয় বরং আপনাদের সমর্থন আর ভালবাসা পেলেই <span>বিডি ফাইন্যান্স</span> টিম ছুটবে শীতকালীন প্রয়ােজনীয় সামগ্রী নিয়ে অসহায় মানুষদের কাছে । <span>বিডি ফাইন্যান্স</span> এ ডিপােজিটকৃত অর্থের ০.৫ শতাংশ সমপরিমান অর্থ <span>সহায়তা</span> প্রদান করবাে আমরা । অর্থাৎ আপনার জমাকৃত মূলধন পুরােটাই থাকছে সুরক্ষিত , আপনার পক্ষ থেকে সহায়তা প্রদান করবে বিডি ফাইন্যান্স । </p>
            <p>এছাড়াও শুধুমাত্র সমর্থন করেই এই আয়ােজনের অংশীদার হতে পারবেন আপনি । প্রতিটি সমর্থনের বিপরীতে এই আয়ােজনে ২০ টাকা । সহায়তা প্রদান করবে বিডি ফাইন্যান্স । নিজেকে মানুষ হিসেবে প্রমাণ করতে , অসহায় মানুষগুলাের কাছে সহায়তা পৌঁছে দেওয়ার এইতাে সময় !</p>
            <button className="submit" onClick={handleClick}>সমর্থ করুন</button>
        
        </section>
    );
}

export default Sohayota;