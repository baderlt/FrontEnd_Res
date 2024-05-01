import { Box, Step, StepButton, Stepper } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Step1_Register from "./Step1_Register";

const steps = ["Add user Info", "Add info about Restaurant"];


const Register: React.FC = () => {
    //////////////////////////////// 
    const [activeStep, setActiveStep] = useState<number>(0);
    const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});



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
          steps.findIndex((i) => !(i in completed))
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
            <form className="bg-white w-full p-[20%]" >
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello !</h1>
              <p className="text-sm font-normal text-gray-600 mb-7">
                Welcome To<b> Order Up..!</b>{" "}
              </p>
              <Box sx={{ width: "100%", marginBottom: "30px" }}>
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

              {activeStep === 0 && <Step1_Register handleComplete={handleComplete} />}

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
