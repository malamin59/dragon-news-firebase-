import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser , setUser} = use(AuthContext);
         const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;;
        const email = e.target.email.value;
        const PhotoUrl = e.target.PhotoUrl.value;
        const password = e.target.password.value;
        console.log(name, PhotoUrl, email, password)
        createUser(email , password)
        .then(result => {
            // console.log(result)
            const user = result.user;
            setUser(user)
        })  .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
          });
    }

    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h3 className='text-2xl font-semibold text-center py-5'> Register your account</h3>
                        <form onSubmit={handleRegister}
                            className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                            {/* PhotoUrl */}
                            <label className="label">Photo URL</label>
                            <input
                                type="text"
                                name='PhotoUrl'
                                className="input"
                                placeholder="Photo URL" />
                            {/* email */}
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name='email'
                                className="input"
                                placeholder="Email"
                                required
                            />
                            
                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password"
                                className="input"
                                placeholder="Password"
                                name='password'
                            />
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
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