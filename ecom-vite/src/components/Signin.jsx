import React from 'react'
import { Link ,useLocation } from 'react-router-dom';

const Signin = () => 
{
    const {search} = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <div className='signin-container'>
        <div className="sigin-row">
            <h1> Sign in Here  </h1>
            <div className="signin-col">
                <form>
                    <div className="form-group">
                        <label htmlFor = 'email'> Email: </label>
                        <input type = "email" id = "email"   required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'> Password : </label>
                        <input type = "password" id = "password"   required/>
                    </div>
                    <div className="form-group">
                        <button type='submit'> Sign In </button>
                    </div>
                    <div className="form-group">
                        <Link to = {`/signup?redirect=${redirect}/`}> Create your Account  </Link>
                    </div>
                </form>
            </div>
        </div>
        Signin
    </div>
  )
}

export default Signin