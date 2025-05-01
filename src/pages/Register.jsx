import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h3 className='text-2xl font-semibold text-center py-5'> Register your account</h3>
                        <form className="fieldset">
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            {/* Name */}
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" />
                            {/* PhotoUrl */}
                            <label className="label">Photo URL</label>
                            <input type="text" className="input" placeholder="Photo URL" />

                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                            <p className='text-center font-semibold pt-5'> Allready  Have An Account ?
                                <Link className='text-secondary' to='/auth/login'> Login </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;