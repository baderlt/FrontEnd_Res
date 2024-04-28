import { Box, Button, Step, StepButton, Stepper, Typography } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const steps= ['Add user Info', 'Add info about Restaurant'];

const Register: React.FC = () => {

  const [Email, setEmail] = useState<string | undefined>();
  const [Password, setPassword] = useState<string | undefined>();
  const [C_Password, setC_Password] = useState<string | undefined>();
  const [step,Setstep]=useState<number>(0);

  const handleRegister=()=>{
    return true;
  }

  const Next_Step = () => {
    if(step >=1){
        handleRegister();
       }else{
   Setstep(step+1);
       }
  };

  ////////////////////////////////
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completed, setCompleted] = useState<{[k: number]: boolean;}>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };


  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };


  return (
    <>
      <>
        <div className="h-screen md:flex">
          <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-orange-300 to-orange-700 i justify-around items-center hidden">
            <img
              src="res_icon.png"
              alt="backgroud"
              className="w-[60%] h-[60%]"
            />
          </div>

          <div className="flex  w-full   justify-center py-10 items-center bg-white">
            <form className="bg-white w-full p-[20%]"  onSubmit={Next_Step}>


            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello !</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome To<b> Order Up..!</b>{" "}
            </p>
            <Box sx={{ width: '100%',marginBottom:'40px' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
    
    {activeStep ==0   ?  <>
 
              <button className="flex justify-center items-center hover:bg-green-200 border-2 h-12  rounded-md bg-green-100 border-gray-600 p-2 w-full  ">
                <img
                  src="icon-google.png"
                  alt="Google"
                  width={30}
                  height={30}
                />{" "}
                &ensp;Continue with google
              </button>
              <button className="flex justify-center items-center mt-2 hover:bg-blue-200 border-2 h-12 rounded-md bg-blue-100 border-gray-600 p-2 w-full mb-4 ">
                <img
                  src="icon_facebook.png"
                  alt="Google"
                  width={30}
                  height={30}
                />{" "}
                &ensp;Continue with facebook
              </button>
              <p className="flex justify-center items-center mt-4 mb-4">or</p>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  className="pl-2 outline-none w-72 border-none"
                  type="text"
                  value={Email}
                  name="Email"
                  id="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 outline-none w-72 border-none"
                  type="password"
                  value={Password}
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div
                className={`flex items-center border-2 py-2 px-2 rounded-2xl mt-4`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 w-72 outline-none border-none"
                  type="password"
                  name="C_Password"
                  id=""
                  placeholder="Password confirmation"
                  pattern="^.{8,}$"
                  ref={C_Password}
                  onChange={(e) => {
                    setC_Password(e.target.value);
                  }}
                  required
                />
              </div>
              </>:""}
              <button
                type="submit"
                className="block w-full bg-blue-500  mt-4 py-2 rounded-2xl text-white font-semibold mb-2" onClick={()=>{handleComplete();handleNext()}}
              >
                {activeStep ==0  ?  "Next" :"Create"}
              </button>

              <span className="text-sm ml-2  hover:text-blue-500 cursor-pointer">
                <Link to="/login">
                  already have an account<b> Login</b>
                </Link>{" "}
                ?
              </span>
            </form>
          </div>
        </div>
      </>
    </>
  );
};
export default Register;