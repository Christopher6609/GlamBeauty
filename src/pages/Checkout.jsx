import React from 'react';
import Footer from '../components/molecules/Footer';
import Heading from '../components/molecules/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo,} from '@fortawesome/free-solid-svg-icons';
import CheckoutItem from '../components/molecules/CheckoutItem';
import { useContext } from 'react';
import { CartContext } from '../components/context/CartContext';

const Checkout = () => {

    const {cartItems,cartTotal} = useContext(CartContext);

  return (
    <div>
        <Heading />
        <section className='py-[3rem] md:px-[6.37rem] px-[0.5rem] md:max-w-[1440px] md:mx-auto'> 
        <div className="md:flex space-y-[0.875rem] md:space-y-0 justify-between">
                <div className=' md:w-[49rem] flex flex-col sm:gap-[2rem] gap-[0.875rem]'>
                    <div className='w-full sm:py-[2rem] py-[1.5rem] space-y-[1.5rem] border-[1px] border-[#E4E7EC] rounded-[0.625rem] sm:p-[2rem] p-[0.5rem]'>
                        <div className='flex items-center space-x-[0.5rem]'>
                            <h2 className='font-[garamond] sm:text-[1.5rem] text-[1rem]'>Purchase Summary</h2> <FontAwesomeIcon icon={faCircleInfo}/>
                        </div>
                        <div className='sm:space-y-[1.5rem] space-y-[1rem]'>
                        {cartItems.map((cartItem) => 

                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/> )}
                       
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className='w-full sm:py-[2rem] py-[1.5rem] space-y-[1.5rem] border-[1px] border-[#E4E7EC] rounded-[0.625rem] sm:p-[2rem] p-[0.5rem]'>
                        <div className='flex items-center space-x-[0.5rem]'>
                            <h2 className='font-[garamond] sm:text-[1.5rem] text-[1rem]'>Delivery Information</h2>
                        </div>
                        <div className="">
                            <form className='space-y-[1.25rem]'>
                                <div className='md:flex justify-between space-y-[1.25rem] md:space-y-0'>
                                    <div className="flex flex-col">
                                        <label htmlFor="firstname" className="font-[garamond] text-[0.875rem] leading-[1.26rem]">First Name:</label>
                                        <input type="text" name="firstname" className="border-[1px] border-[#E4E7EC] rounded-[0.375rem] h-[3.5rem] md:w-[21.125rem] w-full p-[1rem]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="lastname" className="font-[garamond] text-[0.875rem] leading-[1.26rem]">Last Name:</label>
                                        <input type="text" name="lastname" className="border-[1px] border-[#E4E7EC] rounded-[0.375rem] h-[3.5rem] md:w-[21.125rem] w-full p-[1rem]" />
                                    </div>
                                </div>
                                <div className=' w-full space-y-[1.25rem]'>
                                    <div className="flex flex-col">
                                        <label htmlFor="address" className="font-[garamond] text-[0.875rem] leading-[1.26rem]">Address:</label>
                                        <input type="text" name="address" className="border-[1px] border-[#E4E7EC] rounded-[0.375rem] h-[3.5rem] w-full p-[1rem]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="email" className="font-[garamond] text-[0.875rem] leading-[1.26rem]">Email Address:</label>
                                        <input type="text" name="email" className="border-[1px] border-[#E4E7EC] rounded-[0.375rem] h-[3.5rem] w-full p-[1rem]" />
                                    </div>
                                </div>
                                <div className='md:flex justify-between space-y-[1.25rem] sm:space-y-0'>
                                    <div className="flex flex-col">
                                        <label htmlFor="city" className="font-[garamond] text-[0.875rem] leading-[1.26rem]">City/Town:</label>
                                        <input type="text" name="city" className="border-[1px] border-[#E4E7EC] rounded-[0.375rem] h-[3.5rem] md:w-[21.125rem] w-full p-[1rem]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="zipcode" className="font-[garamond] text-[0.875rem] leading-[1.26rem]">Zip Code:</label>
                                        <input type="text" name="zipcode" className="border-[1px] border-[#E4E7EC] rounded-[0.375rem] h-[3.5rem] md:w-[21.125rem] w-full p-[1rem]" />
                                    </div>
                                </div>
                                <div className='md:flex justify-between space-y-[1.25rem] md:space-y-0'>
                                    <div className="flex flex-col">
                                        <label htmlFor="phone" className="font-[garamond] text-[0.875rem] leading-[1.26rem]">Mobile Number:</label>
                                        <input type="number" name="phone" className="border-[1px] border-[#E4E7EC] rounded-[0.375rem] h-[3.5rem] md:w-[21.125rem] w-full p-[1rem]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="altnumber" className="font-[garamond] text-[0.875rem] leading-[1.26rem]">Alternate Mobile Number:</label>
                                        <input type="text" name="altnumber" className="border-[1px] border-[#E4E7EC] rounded-[0.375rem] h-[3.5rem] md:w-[21.125rem] w-full p-[1rem]" />
                                    </div>
                                </div>
                                

                            </form>
                            
                        </div>
                    </div>
                </div>
                <div>
                <div className='md:w-[26.25rem] border-[1px] border-[#E4E7EC] rounded-[0.625rem] sm:p-[2rem] p-[1rem]'>
                    <div className='space-y-[1.75rem]'>
                        <div className='flex items-center space-x-[0.5rem]'>
                            <h2 className='font-[garamond] sm:text-[1.5rem] text-[1rem]'>Payment Information</h2>
                        </div>
                        <div>
                            <h2 className='font-[garamond] sm:text-[1.5rem] text-[1rem]'>Supported Payments</h2>
                            <ul className="flex gap-[1rem]">
                                <li><img src="/img/apple-pay-png1.png" alt="img" className="md:w-[2.5rem] h-[1.5625rem]"/></li>
                                <li><img src="/img/pay-pal-png1.png" alt="img" className="w-[2.5rem] h-[1.5625rem]"/></li>
                                <li><img src="/img/visa-png1.png" alt="img" className="w-[2.5rem] h-[1.5625rem]"/></li>
                                <li><img src="/img/mastercard-png1.png" alt="img" className="w-[2.5rem] h-[1.5625rem]"/></li>
                            </ul>
                        </div>
                        <hr />
                        <div className='sm:space-y-[1.25rem] space-y-[0.5rem]'>
                            <h2 className='font-[garamond] sm:text-[1.5rem]'>Choose Payment Method</h2>
                            <div>
                                <form className=''>
                                    <div className='flex flex-col sm:gap-[1rem]'>
                                       <div><input type="radio" name="payment" /> Debit or Credit Card</div> 
                                       <div><input type="radio" name="payment"/> Pay on Delivery</div> 
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                        <hr />
                        <div className='sm:space-y-[1rem] space-y-[0.5rem]'>
                            <div className='flex items-center'>
                                <h2 className='font-[garamond] sm:text-[1.5rem]'>Enter Card Information</h2>
                            </div>
                            <div>
                                <form className='space-y-[1rem]'>
                                         <div className="flex flex-col">
                                            <label htmlFor="cardname" className="font-[garamond] text-[0.875rem] leading-[1.26rem]">Name on Card:</label>
                                            <input type="text" name="cardname" className="border-[1px] border-[#E4E7EC] rounded-[0.375rem] h-[3.5rem] w-full p-[1rem]" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="cardnumber" className="font-[garamond] text-[0.875rem] leading-[1.26rem]">Card Number:</label>
                                            <input type="number" name="cardnumber" className="border-[1px] border-[#E4E7EC] rounded-[0.375rem] h-[3.5rem] w-full p-[1rem]" placeholder='XXXX XXXX XXXX XXXX'/>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className="flex flex-col">
                                                <label htmlFor="expiry" className="font-[garamond] text-[0.875rem] leading-[1.26rem]">Expiry Date:</label>
                                                <input type="date" name="expiry" className="border-[1px] border-[#E4E7EC] rounded-[0.375rem] h-[3.5rem] md:w-[12rem] p-[1rem]" />
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="cvv" className="font-[garamond] text-[0.875rem] leading-[1.26rem]">CVV:</label>
                                                <input type="number" name="cvv" className="border-[1px] border-[#E4E7EC] rounded-[0.375rem] h-[3.5rem] md:w-[9.25rem] p-[1rem]" placeholder="123" />
                                            </div>
                                        </div>
                                </form>
                            </div>
                            <div className='space-y-[1rem]'>
                                    <h2 className='font-[garamond] sm:text-[1.5rem] text-[1rem]'>Supported Payments</h2>
                                    <ul className="flex gap-[1rem]">
                                        <li><img src="/img/apple-pay-png1.png" alt="img" className="md:w-[2.5rem] h-[1.5625rem]"/></li>
                                        <li><img src="/img/pay-pal-png1.png" alt="img" className="w-[2.5rem] h-[1.5625rem]"/></li>
                                        <li><img src="/img/visa-png1.png" alt="img" className="w-[2.5rem] h-[1.5625rem]"/></li>
                                        <li><img src="/img/mastercard-png1.png" alt="img" className="w-[2.5rem] h-[1.5625rem]"/></li>
                                    </ul>
                                </div>
                        </div>
                        <hr />
                        <div className='font-[garamond]'>
                            <div className="flex justify-between items-center md:py-[0.44rem]">
                                <p className="text-[0.85rem] leading-[1.45rem] text-[#667185]">Subtotal:</p>
                                <p className="text-[0.875rem] text-[#101928] leading-[1.5rem] font-[400]">${cartTotal}</p>
                            </div>
                            <div className="flex justify-between items-center md:py-[0.44rem]">
                                <p className="text-[0.85rem] leading-[1.45rem] text-[#667185]">VAT(10%):</p>
                                <p className="text-[0.875rem] text-[#101928] leading-[1.5rem] font-[400]">$0.00</p>
                            </div>
                            <div className="flex justify-between items-center md:py-[0.44rem]">
                                <p className="text-[0.85rem] leading-[1.45rem] text-[#667185]">Shipping:</p>
                                <p className="text-[0.875rem] text-[#101928] leading-[1.5rem] font-[400]">$0.00</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                             <div className="flex justify-between items-center md:py-[0.44rem]">
                                <p className="text-[0.85rem] leading-[1.45rem] text-[#000] font-[500]">Total:</p>
                                <p className="text-[0.875rem] text-[#000] leading-[1.5rem] font-[500]">${cartTotal}</p>
                            </div> 
                        </div>
                        <div>
                            <div className='flex items-center space-x-[0.5rem]'>
                                <h2 className='font-[garamond] sm:text-[1.5rem] text-[1rem]'>Apply Discount</h2>
                            </div>
                            <div className="flex gap-[1rem] justify-center items-center ">
                                <form>
                                    <input type="text" placeholder="Enter Coupon Code" name="coupon" className="sm::w-[15.125rem] md:h-[3.5rem] rounded-[1.875rem] bg-[#F9FAFB] text-[#98A2B3] text-[0.875rem] p-[1rem]"  />
                                </form>
                                <button className="bg-[#000] w-[6.375rem] h-[3.5rem] rounded-[1.875rem] text-[#FFF] font-[garamond] px-[1.5rem] py-[1rem]">Apply</button>
                            </div>
                        </div>
                        <div>
                            <button className='w-full bg-[#000] text-[#FFF] px-[1.5rem] py-[1rem] rounded-[1.875rem] text-[1rem] '>Pay ${cartTotal}</button>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        
       
        </section>

      <Footer/>
    </div>
  )
}

export default Checkout
