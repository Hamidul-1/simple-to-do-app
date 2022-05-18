import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


// import Loading from '../Loading/Loading';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="p-12 card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <div class="card-body">

                            <h2 className='text-2xl'>Sign In</h2>
                            {/* {errorElement} */}
                            <div class="form-control mt-6">
                                <button onClick={() => signInWithGoogle()} class="btn btn-primary px-12">Sign In With Google</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;