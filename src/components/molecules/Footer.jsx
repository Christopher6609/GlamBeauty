import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#000] text-[#FFF] w-full">
                <div className="pt-[3.12rem] max-w-[1440px] mx-auto md:px-[6.19rem] px-[1rem]">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="font-[garamond] md:text-[1.875rem] text-[1.5rem] font-normal leading-[2.375rem] uppercase">Be the first!</h2>
                        <p className="md:text-[1rem] text-[0.5rem] color-[#DFDFDF] font-[400] leading-[1.875rem] font-[inter]">Sign up now to receive the latest news, offers and exclusive drops</p>
                    </div>
                    <div className="flex gap-[1rem] justify-center items-center mt-[1.25rem] ">
                        <form>
                            <input type="text" placeholder="Enter your email" name="subscribe" className="md:w-[22.5rem] md:h-[3rem] rounded-[0.5rem] border-[#D0D5DD] text-[#000] px-[0.875rem] py-[0.75rem]"  />
                        </form>
                        <button className="bg-[#FFF] w-[6.875rem] h-[3rem] rounded-[0.5rem] text-[#000] font-[garamond]">Subscribe</button>
                    </div>
                    <div className="text-center">
                        <p className="font-[inter] md:text-[0.875rem] text-[0.5rem] font-normal leading-[1.25rem]">We care about your data in our <a href="#" className="underline"> privacy policy.</a></p>
                    </div>
                    <div className="flex flex-wrap justify-between gap-3 md:gap-0 md:py-[5.56rem] py-[3rem] px-[1rem] md:px-0">
                        <div>
                            <ul className="font-[garamond] md:text-[1rem] text-[0.8rem] leading-[1.5rem] text-[#FEEFE2] space-y-[0.75rem] ">
                                <li className="md:text-[1.5rem] text-[1rem] leading-[1.25rem]">GlamBeauty</li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Partnership & Supplies</a></li>
                                <li><a href="#">Sitemap</a></li>
                                <ul className="flex gap-[1rem]">
                                    <li><a href="#"><FontAwesomeIcon icon={faX} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                    
                                </ul>
                            </ul>
                            
                        </div>
                        <div>
                            <ul className="font-[garamond] md:text-[1rem] text-[0.8rem] leading-[1.5rem] text-[#FEEFE2] space-y-[0.75rem]">
                                <li className="md:text-[1.5rem] text-[1rem] leading-[1.25rem]">Legal</li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Cookie Policy (EU)</a></li>
                                
                            </ul>
                            
                        </div>
                        <div>
                            <ul className="font-[garamond] md:text-[1rem] text-[0.8rem] leading-[1.5rem] text-[#FEEFE2] space-y-[0.75rem]">
                                <li className="md:text-[1.5rem] text-[1rem] leading-[1.25rem]">Help & Information</li>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Returns Policy</a></li>
                                <li><a href="#">FAQs</a></li>
                                
                            </ul>
                            
                        </div>
                        <div>
                            <ul className="font-[garamond] md:text-[1rem] text-[0.8rem] leading-[1.5rem] text-[#FEEFE2] space-y-[0.75rem]">
                                <li className="md:text-[1.5rem] text-[1rem] leading-[1.25rem]">Contact Us</li>
                                <li><FontAwesomeIcon icon={faPhone} className="pr-[0.5rem]"/>07999385318, 07865432665</li>
                                <li><FontAwesomeIcon icon={faEnvelope} className="pr-[0.5rem]" /><a href="mailto:glambeautyy@gmail.com"></a>Glambeauty@gmail.com</li>
                            </ul>
                            
                        </div>
                        <div>
                            <ul className="font-[garamond] md:text-[1rem] text-[0.8rem] leading-[1.5rem] text-[#FEEFE2] space-y-[0.75rem]">
                                <li className="md:text-[1.5rem] text-[1rem] leading-[1.25rem]"><a href="#">Our International sites</a></li>
                                    <ul className="flex gap-[1rem]">
                                        <li><img src="/img/us1.png" alt="img" className="w-[1.875rem] h-[1.875rem]"/></li>
                                        <li><img src="/img/fr1.png" alt="img" className="w-[1.875rem] h-[1.875rem]"/></li>
                                        <li><img src="/img/pl1.png" alt="img" className="w-[1.875rem] h-[1.875rem]"/></li>
                                        <li><img src="/img/dk1.png" alt="img" className="w-[1.875rem] h-[1.875rem]"/></li>
                                        <li><img src="/img/it1.png" alt="img" className="w-[1.875rem] h-[1.875rem]"/></li>
                                        <li><img src="/img/es1.png" alt="img" className="w-[1.875rem] h-[1.875rem]"/></li>
                                    </ul>
                                    <ul className="space-y-[1rem]">
                                    <li className="md:text-[1.5rem] text-[1rem] leading-[1.25rem]">Supported Payments</li>
                                    <ul className="flex gap-[1rem]">
                                        <li><img src="/img/apple-pay-png1.png" alt="img" className="md:w-[2.5rem] h-[1.5625rem]"/></li>
                                        <li><img src="/img/pay-pal-png1.png" alt="img" className="w-[2.5rem] h-[1.5625rem]"/></li>
                                        <li><img src="/img/visa-png1.png" alt="img" className="w-[2.5rem] h-[1.5625rem]"/></li>
                                        <li><img src="/img/mastercard-png1.png" alt="img" className="w-[2.5rem] h-[1.5625rem]"/></li>
                                    </ul>
                                    </ul>
                            </ul>
                            
                        </div>
                    </div>
                   <hr className="text-white"/>
                   <div className="flex justify-between items-center md:py-[2rem] py-[0.5rem]">
                    <div className="md:w-[12.44513rem] w-[5rem] h-[1.44rem]">
                        <img className="object-contain w-full h-full" src="/img/LOGO.png"/>
                    </div>
                    <div className="flex md:text-[1.5rem] text-[0.6rem]">
                        <h3>GLAMBEAUTY &copy; 2024.</h3>
                        <p> All Right Reserved</p>
                    </div>
                   </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer
