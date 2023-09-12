import React from 'react'
import Link from 'next/link'
 const SignUp = () => {
  return (
    <>
     <div className='signUpForm'>
     <h2 className='h2'>SIGNUP</h2>
    <p className='para'>Create an account to put up properties for rent/sale</p>
       

        <form className='form' action="">

            <input className = 'uname'type="text" placeholder="Full Name" id="username" name="username" />
            <br />

            <input className = 'uname'type="text" placeholder="National ID" id="userid" name="userid" />
            <br />
           
            <input className = 'uname'type="text" placeholder="Phone Number" id="number" name="phone_number" />
            <br />
            <input className = 'uname'type="text" placeholder="Email Address" id="email_address" name="email_address" />
            <br />
            <input className = 'uname' type="password" placeholder="Password"  id="password" name="password" />
            <br />
            <button className= 'loginButton'type="submit">Sign Up</button>
        </form>
        <h3 className='h3'><Link href="/">Back Home</Link></h3>
</div>
    </>
   
  )
}
export default SignUp;
