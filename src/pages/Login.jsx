import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export default function Login(){
    return (
        <main>
            <div className="flex h-screen">
                <div className="w-1/2 h-full ">
                    <img className="w-full h-full" src="/img/loginImage.png"  alt="Login image" />
                </div>
                <div className="flex flex-col items-center justify-center w-1/2">
                    <div className="flex flex-col items-center w-[27.625rem] ">
                        <div className="space-y-[0.5rem] w-full">
                            <h1 className="font-[garamond] font-[700] text-[2.25rem] leading-[2.7rem] tracking-[-0.09rem]">Login to Account</h1>
                            <p className="text-[0.875rem] leading-[1.26rem] font-normal">Enter the email you used to purchase the access pass 🔐</p>
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
                                <div className="w-full">
                                    <button className="bg-[#000] text-center w-full text-[#FFF] px-[1.5rem] py-[1rem] rounded-[1.875rem]" >Login</button>
                                </div>
                                
                            </form>
                        </div>
                        <div className="w-full flex justify-center items-center py-[2rem]" >
                            <p>Or</p>
                        </div>
                        <div className="w-full">
                             <button className=" text-center w-full text-[#000] px-[1.5rem] py-[1rem] rounded-[0.375rem] border-[2px] border-[#D0D5DD]" > <FontAwesomeIcon className="px-[1rem]" icon={faGoogle} />Continue with Google</button>
                        </div>
                        <div className="py-[1.5rem]">
                            <p className="text-[0.875rem]">Don&apos;t have an account yet? <span className="text-[#800020]"> <Link>Create Account</Link></span> </p>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}