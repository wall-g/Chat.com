import React, { useState } from 'react';
import { loginDefaultData } from '../utils/mockData';
import useValidations from '../hooks/useValidations';
import { apiRequest } from '../services/apiService';

export default function Login(props) {
    const [showPassword, setShowPassword] = useState(true);
    const [loginData, setLoginData] = useState(loginDefaultData);
    const {setIsLogin} = props;
    const [errors, setErrors] = useState({});
    const handleLogin = async (e) => {
        e.preventDefault();
        const newErrors = {};
        for (field in loginData) {
            newErrors[field] = validate(loginData[field]);
        }

        setErrors(newErrors);
        const hasErrors = Object.values(newErrors).some((val) => val.length > 0);
        if (!hasErrors) {
            const credentials = { 
                email: loginData['email'].value, 
                password: loginData['password'].value 
            };
            const value = await apiRequest('login', 'POST', credentials);            
            setErrors({});
        }
    }

    const validate = useValidations();

    const handleLoginData = (e, fieldName) => {
        setLoginData({ ...loginData, [fieldName]: { ...loginData[fieldName], value: e.target.value } })
    }

    return (
        <div className='bg-blue-50 w-3/12 m-auto mt-8 p-4 text-sm'>
            <form onSubmit={(e) => handleLogin(e)}>
                <div className='p-2'>
                    <label className='block mb-2'>Email <span className="text-red-500">*</span> </label>
                    <input className='w-full p-2' value={loginData['email'].value} onChange={(e) => handleLoginData(e, 'email')}/>
                    {errors.email && errors.email.length > 0 && (<p className='text-xs text-red-500'>{errors?.email[0]}</p>)}
                </div>
                <div className='p-2'>
                    <label className='block mb-2'>Password <span className="text-red-500">*</span> </label>
                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} className='w-full p-2'
                            value={loginData['password'].value}
                            onChange={(e) => handleLoginData(e, 'password')}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-600 hover:text-gray-800 absolute right-2 top-2"
                        >
                            {showPassword ? "hide" : "show"}
                        </button>
                    </div>
                    {errors.password && errors.password.length > 0 && (<p className='text-xs text-red-500'>{errors?.password[0]}</p>)}
                </div>
                <div className='p-2 text-white mt-2'>
                    <button className='bg-blue-400 w-full p-2 hover:bg-blue-500'>Login</button>
                </div>
            </form>
            <p className='w-3/12 m-auto p-2 text-blue-400 underline cursor-pointer hover:text-blue-500' onClick={() => setIsLogin(false)}>Register?</p>
        </div>
    )
}
