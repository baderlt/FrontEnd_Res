import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Password_case = {
    lower: boolean;
    upper: boolean;
    num: boolean;
    char: boolean;
    special: boolean;
  };
  interface Step1RegisterProps {
    handleComplete: any; 
  }
  
const Step1_Register:React.FC<Step1RegisterProps>=({handleComplete})=>{
    const [Password_case, setCases] = useState<Password_case>({lower: false,upper: false,num: false,char: false,special: false,});
    const [Email, setEmail] = useState<string | undefined>();
    const [Password, setPassword] = useState<string | undefined>("");
    const [C_Password, setC_Password] = useState<string | undefined>();
    const [Username,SetUserName]=useState<string | undefined>("");

///// validation les cases Password 
  const Cases_Validation = (e:any) => {
    let new_Cases = Password_case;
    if (e.match(/[a-z]/)) {
      new_Cases = { ...new_Cases, lower: true };
    } else {
      new_Cases = { ...new_Cases, lower: false };
    }
    if (e.match(/[A-Z]/)) {
      new_Cases = { ...new_Cases, upper: true };
    } else {
      new_Cases = { ...new_Cases, upper: false };
    }
    if (e.match(/[0-9]/)) {
      new_Cases = { ...new_Cases, num: true };
    } else {
      new_Cases = { ...new_Cases, num: false };
    }
    if (e.length >= 8) {
      new_Cases = { ...new_Cases, char: true };
    } else {
      new_Cases = { ...new_Cases, char: false };
    }
    if (e.match(/[@#$%&*+!()_-]/)) {
      new_Cases = { ...new_Cases, special: true };
    } else {
      new_Cases = { ...new_Cases, special: false };
    }
    setCases(new_Cases);
    return;
  };
    return (
        <>
   <>
                  <button className="flex justify-center items-center hover:bg-green-200 border-2 h-11  rounded-md bg-green-100 border-gray-600 p-2 w-full  ">
                    <img
                      src="icon-google.png"
                      alt="Google"
                      width={30}
                      height={30}
                    />{" "}
                    &ensp;Continue with google
                  </button>
                  <button className="flex justify-center items-center mt-2 hover:bg-blue-200 border-2 h-11 rounded-md bg-blue-100 border-gray-600 p-2 w-full mb-4 ">
                    <img
                      src="icon_facebook.png"
                      alt="Google"
                      width={30}
                      height={30}
                    />{" "}
                    &ensp;Continue with facebook
                  </button>
                  <p className="flex justify-between items-center mt-2 mb-4"><hr className="w-[46%] text-black bg-black" />
                   or 
                    <hr className="w-[46%] text-black bg-black" />
                  </p>
                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                      />
                    </svg>
                    <input
                      className="pl-2 w-72 outline-none border-none"
                      type="text"
                      name="Username"
                      id=""
                      value={Username}
                      placeholder="Username"
                      onChange={((e)=>{SetUserName(e.target.value)})}
                      required
                    />
                  </div>
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
                      className="pl-2 outline-none w-full border-none"
                      type="password"
                      value={Password}
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => {setPassword(e.target.value);Cases_Validation(e.target.value)}}
                      required
                    />
                  </div>

                  <div className={`m-4 ${Password == "" ? "hidden" : ""}`}>
                    <div
                      className={`${
                        Password_case.lower ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {Password_case.lower ? (
                        <FontAwesomeIcon size="xl" icon={faCheck} />
                      ) : (
                        <FontAwesomeIcon size="xl" icon={faXmark} />
                      )}
                      &ensp; At least <b>one lowercase letter</b>{" "}
                    </div>
                    <div
                      className={`${
                        Password_case.upper ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {Password_case.upper ? (
                        <FontAwesomeIcon size="xl" icon={faCheck} />
                      ) : (
                        <FontAwesomeIcon size="xl" icon={faXmark} />
                      )}
                      &ensp; At least <b>one Uppercase lettre</b>{" "}
                    </div>
                    <div
                      className={`${
                        Password_case.num ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {Password_case.num ? (
                        <FontAwesomeIcon size="xl" icon={faCheck} />
                      ) : (
                        <FontAwesomeIcon size="xl" icon={faXmark} />
                      )}
                      &ensp; At least <b>one Number</b>{" "}
                    </div>
                    <div
                      className={`${
                        Password_case.char ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {Password_case.char ? (
                        <FontAwesomeIcon size="xl" icon={faCheck} />
                      ) : (
                        <FontAwesomeIcon size="xl" icon={faXmark} />
                      )}
                      &ensp; Minimun <b>8 charcters</b>{" "}
                    </div>
                    <div
                      className={`${
                        Password_case.special
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {Password_case.special ? (
                        <FontAwesomeIcon size="xl" icon={faCheck} />
                      ) : (
                        <FontAwesomeIcon size="xl" icon={faXmark} />
                      )}
                      &ensp; At least <b>one Special character</b>{" "}
                    </div>
                  </div>

                  <div
                    className={`flex items-center w-full border-2 ${Password !="" && Password !=C_Password ? "border-red-400 shadow-sm shadow-red-300":""}   py-2 px-2 rounded-2xl mt-4`}
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
                      className="pl-2 w-full outline-none border-none"
                      type="password"
                      name="C_Password"
                      id=""
                      placeholder="Password confirmation"
                      pattern="^.{8,}$"
                      onChange={(e) => {
                        setC_Password(e.target.value);
                      }}
                      required
                    />
                  </div>
       


              <button
                type="submit"
                className="block w-full bg-blue-500  mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                onClick={() => {
                  handleComplete();
                }}
              >
                Next
              </button>
              </>
        </>
    )
}
export default Step1_Register;