import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { HeadBar } from "../components/HeadBar";
import StepOne from "./AddressVerify";
import StepTwo from "./ContactInfo";
import StepThree from "./Interests";

export const Signup = () => {
  
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    const savedStep = parseInt(localStorage.getItem('signupStep') || "1", 10);
    setStep(savedStep);
    navigate(`/signup/step${savedStep}`);

  }, [navigate]);
  
  const handleNextStep = (step:number) => {
    localStorage.setItem('signupStep', step.toString());
    setStep(step);
    navigate(`/signup/step${step}`);
  }

  return (
    <Routes>
      <Route path="signup/step1" element={
        <>
          <HeadBar />
          <StepOne handleNextStep = {()=> handleNextStep(2)}/>
        </>
      } />
      <Route path="signup/step2" element={
        step >= 2 ? 
          <>
            <HeadBar />
            <StepTwo handleNextStep={() => handleNextStep(3)}/> 
          </>
          : 
          <Navigate replace to="signup/step1" /> 
        } />
      <Route path="signup/step3" element={
        step >= 3 ? 
        <>
          <HeadBar />
          <StepThree /> 
        </>
        : 
        <Navigate replace to={`/signup/step${step}`} /> } />
    </Routes>
  )
}