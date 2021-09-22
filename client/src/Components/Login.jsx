import React, { useContext } from 'react';
import PaintingContext from '../Context/PaintingContext';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { loginUser } from '../helpers/apiCalls';

const Login = () => {
    const { setUser } = useContext( PaintingContext );
    const { register, handleSubmit, formState: { errors } } = useForm({});
    const history = useHistory();

    const submitHandler = async (data) => {
        const res = await loginUser( data );
        if (!res.error) {
            setUser( res );
            history.push("/")
        }
    }


    return (
        <div>
            <h5>Login</h5>
            <form onSubmit={handleSubmit(submitHandler)}>
                <label htmlFor="loginEmail">Email: </label>
                <input id="loginEmail" name="loginEmail" {...register("email", { required: true})} />
                {errors.email && <span>Email is required</span>}
                
                <label htmlFor="loginPassword">Password: </label>
                <input type="password" id="loginPassword" name="loginPassword" {...register("password", { required: true })} />
                {errors.password && <span>Password is required</span>}
                
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login
