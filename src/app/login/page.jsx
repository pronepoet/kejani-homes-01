import React from 'react'
import Link from 'next/link'
const Login = () => {
  return (
    <>

<div>
<form className='login_form' action="">
            <label className = 'unameLabel' htmlFor="username">Username:</label>
            <br />
            <input className = 'uname' type="text" placeholder="Phone Number/Email Address" id="username" name="username" />
            <br />
            <label className = 'passwordLabel' htmlFor="password">Password:</label>
            <br />
            <input className = 'uname' type="password" placeholder="Password"  id="password" name="password" />
            <br />
            <button className= 'loginButton' type="submit">Login</button>
            </form>
            <p className='logo'>&#169; Do not have an account? <Link href="/signup"><span className='signUp'>Sign Up</span></Link> now</p>
            <h3 className='h3'><Link href="/">Back Home</Link></h3>
</div>
    </>
 
  )
}

export default Login