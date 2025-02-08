import React, { useState } from 'react';
import { registerDefaultData } from '../utils/mockData';
import useValidations from '../hooks/useValidations';
import { apiRequest } from '../services/apiService';

function Register(props) {
    const [showPassword, setShowPassword] = useState(true);
    const [registerData, setRegisterData] = useState(registerDefaultData);
    const [errors, setErrors] = useState({});
    const { setIsLogin } = props;
    const validate = useValidations();

    const handleUpload = (e) => {
        setRegisterData({ ...registerData, ['pic']: { ...registerData['pic'], value: e.target.files[0] } });
    }

    const handleRegisterData = (e, fieldname) => {
        setRegisterData({ ...registerData, [fieldname]: { ...registerData[fieldname], value: e.target.value } })
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const newErrors = {};
        for (field in registerData) {
            newErrors[field] = validate(registerData[field]);
        }

        if (registerData['password'].value !== registerData['confirmPassword'].value) {
            newErrors['confirmPassword'].push('Passwords do not match');
        }        

        setErrors(newErrors);
        const hasErrors = Object.values(newErrors).some((val) => val.length > 0);
        if (!hasErrors) {
            const formData = new FormData();
            formData.append("email", registerData['email'].value);
            formData.append("password", registerData['password'].value);
            formData.append("username", registerData['username'].value);
            if(registerData['pic'].value){
                formData.append("profilePic", registerData['pic'].value);
            }
            const val = await apiRequest("signup", "POST", formData);

            console.log(val);
            

            setErrors({});
        }
    }

    return (
        <div className='bg-blue-50 w-1/4 m-auto mt-8 p-4 text-sm'>
            <form onSubmit={(e) => handleRegister(e)}>
            <div className='p-2'>
                    <label className='block mb-2'>Username <span className="text-red-500">*</span> </label>
                    <input className='w-full p-2' onChange={(e) => handleRegisterData(e, 'username')} value={registerData['username'].value} />
                    {errors.username && errors.username.length > 0 && (<p className='text-xs text-red-500'>{errors?.username[0]}</p>)}
                </div>
                <div className='p-2'>
                    <label className='block mb-2'>Email <span className="text-red-500">*</span> </label>
                    <input className='w-full p-2' onChange={(e) => handleRegisterData(e, 'email')} value={registerData['email'].value} />
                    {errors.email && errors.email.length > 0 && (<p className='text-xs text-red-500'>{errors?.email[0]}</p>)}
                </div>
                <div className='p-2'>
                    <label className='block mb-2'>Password <span className="text-red-500">*</span> </label>
                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} className='w-full p-2' onChange={(e) => handleRegisterData(e, 'password')} value={registerData['password'].value} />
                        {errors.password && errors.password.length > 0 && (<p className='text-xs text-red-500'>{errors?.password[0]}</p>)}
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-600 hover:text-gray-800 absolute right-2 top-2"
                        >
                            {showPassword ? "hide" : "show"}
                        </button>
                    </div>
                </div>
                <div className='p-2'>
                    <label className='block mb-2'>Confirm Password <span className="text-red-500">*</span> </label>
                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} className='w-full p-2' onChange={(e) => handleRegisterData(e, 'confirmPassword')} value={registerData['confirmPassword'].value} />
                        {errors.confirmPassword && errors.confirmPassword.length > 0 && (<p className='text-xs text-red-500'>{errors?.confirmPassword[0]}</p>)}
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-600 hover:text-gray-800 absolute right-2 top-2"
                        >
                            {showPassword ? "hide" : "show"}
                        </button>
                    </div>
                </div>
                <div className='p-2'>
                    <label className='block mb-2'>Upload your photo </label>
                    <input type="file" accept="image/*" className='w-full p-2' onChange={(e) => handleUpload(e)} />
                </div>
                <div className='p-2 text-white mt-2'>
                    <button className='bg-blue-400 w-full p-2 hover:bg-blue-500'>
                        Register
                    </button>
                </div>
            </form>
            <p className='w-3/12 m-auto p-2 text-blue-400 underline cursor-pointer hover:text-blue-500' onClick={() => setIsLogin(true)}>Login?</p>
        </div>
    )
}

export default Register