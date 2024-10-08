import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faCaretDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../components/atoms/FormInput";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../utils/firebase/firebase";
import { useState } from "react";

export default function SignUp() {
  const signUpWithGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const DefaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const [formFields, setFormFields] = useState(DefaultFormFields);
  const { displayName, email, password, confirmpassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const formFieldsReset = () => {
    setFormFields(DefaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmpassword) {
      alert("Password do not match!");
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      formFieldsReset();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Email is currently in use by another user!");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <main>
      <div className="md:flex">
        <div className="md:w-2/6 h-screen hidden md:flex">
          <div className="md:w-[12.44513rem] md:h-[1.44rem] w-[6rem] h-[1.44rem] absolute top-[7.56rem] left-[5.44rem]">
            <Link to={`/`}>
              <img
                className="object-contain w-full h-full"
                src={"/img/LOGO.png"}
                alt="logo"
              />
            </Link>
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full"
              src="/img/Rectangle.png"
              alt="Login image"
            />
          </div>
        </div>
        <div className="md:hidden">
          <div className="md:h-[4.5rem] h-[2rem] bg-[#121212] flex justify-end space-x-[0.75rem] md:space-x-[7.31rem] px-[1rem] md:px-[6.31rem] ">
            <div className="text-[#FFF] flex items-center md:space-x-[3rem]">
              <marquee>
                {" "}
                <p className=" text-[0.5rem] md:text-[0.75rem] leading-[-0.00375rem] ">
                  Upto 50% off Selected Brands + Free UK delivery on Orders
                  above $10
                </p>
              </marquee>
              <a
                href="#"
                className="md:text-[0.75rem] text-[0.5rem] leading-[1.00375rem] tracking-[-0.00375rem] hidden md:block"
              >
                Shop Now
              </a>
            </div>
            <div className="flex items-center text-[#FFF] md:space-x-[1.75rem] space-x-[0.75rem] font-[inter] md:text-[0.75rem] text-[0.5rem]">
              <p>
                <FontAwesomeIcon icon={faPhone} />
                +1 2345 56768
              </p>
              <p className="hidden md:block">
                EN <FontAwesomeIcon icon={faCaretDown} />
              </p>
              <div className="flex gap-[0.2rem] items-center md:gap-[0.5rem]">
                <div>
                  <img src="/img/Frame.png" />
                </div>
                <p>
                  United Kingdom <FontAwesomeIcon icon={faCaretDown} />
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:h-[4.5rem] h-[3rem] bg-[#212121] flex items-center text-white justify-between px-[1rem] md:px-[6.31rem]">
            <div className="md:w-[12.44513rem] md:h-[1.44rem] w-[6rem] h-[1.44rem]">
              <Link to={`/Home`}>
                <img
                  className="object-contain w-full h-full"
                  src={"/img/LOGO.png"}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:w-4/6 md:overflow-auto">
          <div className="py-[1rem] md:text-[1rem] text-[0.875rem] text-center w-full ">
            <p>
              Account creation currently unavaliable{" "}
              <span className="text-[green]">
                kindly use the Continue without Signup button
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center md:w-[27.625rem] ">
            <div className="space-y-[0.5rem] w-full">
              <h1 className="font-[garamond]  text-[2.25rem] leading-[2.7rem] tracking-[-0.09rem]">
                Create an Account
              </h1>
              <p className="text-[0.875rem] leading-[1.26rem] font-normal">
                Enter your Information below to continue
              </p>
            </div>
            <div className="w-full pt-[3rem] ">
              <form onSubmit={handleSubmit} className="space-y-[1rem]">
                <FormInput
                  label="Username"
                  type="text"
                  name="displayName"
                  value={displayName}
                  onChange={handleChange}
                  required
                />

                <FormInput
                  label="Email Address:"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Password:"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Confirm Password:"
                  type="password"
                  name="confirmpassword"
                  value={confirmpassword}
                  onChange={handleChange}
                  required
                />
                <div className="w-full">
                  <button className="bg-[#000] text-center w-full text-[#FFF] px-[1.5rem] py-[1rem] rounded-[1.875rem]">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full flex justify-center items-center py-[2rem]">
              <p>Or</p>
            </div>
            <div className="w-full pb-[2rem] md:pb-0">
              <div className="w-full">
                <button
                  type="button"
                  onClick={signUpWithGoogleUser}
                  className=" text-center w-full text-[#000] px-[1.5rem] py-[1rem] rounded-[0.375rem] border-[2px] border-[#D0D5DD]"
                >
                  {" "}
                  <FontAwesomeIcon className="px-[1rem]" icon={faGoogle} />
                  Sign up with Google
                </button>
              </div>
              <div className="py-[1.5rem] text-center">
                <p className="text-[0.875rem]">
                  Have an account?{" "}
                  <span className="text-[#800020]">
                    {" "}
                    <Link to="/">Log in</Link>
                  </span>{" "}
                </p>
              </div>
              <div className="w-full">
                <Link to={`/Home`}>
                  {" "}
                  <button className="bg-[#000] text-center w-full text-[#FFF] px-[1.5rem] py-[1rem] rounded-[1.875rem]">
                    Continue without Signup
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
