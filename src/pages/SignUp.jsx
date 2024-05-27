import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function SignUp(){
    return (
        <main>
            <div className="flex">
                <div className="w-1/2 h-screen">
                <div className="md:w-[12.44513rem] md:h-[1.44rem] w-[6rem] h-[1.44rem] absolute top-[7.56rem] left-[5.44rem]">
                       <Link to={`/`}><img className="object-contain w-full h-full" src={"/img/LOGO.png"} alt="logo"/></Link> 
                    </div>
                   <div className="w-full h-full">
                         <img className="w-full h-full" src="/img/Rectangle.png"  alt="Login image" />
                    </div> 
                
                </div>
                <div className="flex flex-col items-center justify-center w-1/2 overflow-auto">
                <div className="py-[1rem] text-[1rem] text-center w-full ">
                        <p>Account creation currently unavaliable <span className="text-[green]">kindly use the Continue without Signup button</span></p>
                    </div>
                    <div className="flex flex-col items-center w-[27.625rem] ">
                        <div className="space-y-[0.5rem] w-full">
                            <h1 className="font-[garamond]  text-[2.25rem] leading-[2.7rem] tracking-[-0.09rem]">Create an Account</h1>
                            <p className="text-[0.875rem] leading-[1.26rem] font-normal">Enter your Information below to continue</p>
                        </div>
                        <div className="w-full pt-[3rem] ">
                            <form className="space-y-[1rem]">
                                <div className="flex flex-col w-full ">
                                    <label htmlFor="email" className="font-[garamond] text-[0.875rem]">Email Address:</label>
                                    <input type="text" name="email" className="h-[3.5rem] border-[2px] rounded-[0.375rem] border-[#D0D5DD] w-full" /> 
                                </div>
                                <div className="flex flex-col w-full ">
                                    <label htmlFor="password" className="font-[garamond] text-[0.875rem]">Password:</label>
                                    <input type="password" name="password" className="h-[3.5rem] border-[2px] rounded-[0.375rem] border-[#D0D5DD] w-full" /> 
                                </div>
                                <div className="flex flex-col w-full ">
                                    <label htmlFor="confirmpassword" className="font-[garamond] text-[0.875rem]"> Confirm Password:</label>
                                    <input type="password" name="confirmpassword" className="h-[3.5rem] border-[2px] rounded-[0.375rem] border-[#D0D5DD] w-full" /> 
                                </div>
                                <div className="w-full">
                                    <button className="bg-[#000] text-center w-full text-[#FFF] px-[1.5rem] py-[1rem] rounded-[1.875rem]" >
                                        Sign Up
                                    </button>
                                </div>
                                
                            </form>
                        </div>
                        <div className="w-full flex justify-center items-center py-[2rem]" >
                            <p>Or</p>
                        </div>
                        <div className="w-full">
                             <button className=" text-center w-full text-[#000] px-[1.5rem] py-[1rem] rounded-[0.375rem] border-[2px] border-[#D0D5DD]" > <FontAwesomeIcon className="px-[1rem]" icon={faGoogle} />Sign up with Google</button>
                        </div>
                        <div className="py-[1.5rem]">
                            <p className="text-[0.875rem]">Have an account? <span className="text-[#800020]"> <Link to="/">Log in</Link></span> </p>
                        </div>
                        <div className="w-full">
                        <Link to={`/Home`}> <button  className="bg-[#000] text-center w-full text-[#FFF] px-[1.5rem] py-[1rem] rounded-[1.875rem]" >Continue without Signup</button></Link>
                                </div>
                    </div>
                </div>
            </div>
        </main>
    )
}