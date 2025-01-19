import React, { useState } from 'react'

function Register(props) {
    const [showPassword, setShowPassword] = useState(true);
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e, 'called');
    }
    const {setIsLogin} = props;

    return (
        <div className='bg-blue-50 w-1/4 m-auto mt-8 p-4 text-sm'>
            <form onSubmit={(e) => handleRegister(e)}>
                <div className='p-2'>
                    <label className='block mb-2'>Email <span className="text-red-500">*</span> </label>
                    <input className='w-full p-2' required />
                </div>
                <div className='p-2'>
                    <label className='block mb-2'>Password <span className="text-red-500">*</span> </label>
                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} className='w-full p-2' required />
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
                        <input type={showPassword ? "text" : "password"} className='w-full p-2' required />
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
                    <input type="file" accept="image/*" className='w-full p-2' />
                </div>
                <div className='p-2 text-white mt-2'>
                    <button className='bg-blue-400 w-full p-2 hover:bg-blue-500'>SignUp</button>
                </div>
            </form>
            <p className='w-3/12 m-auto p-2 text-blue-400 underline cursor-pointer hover:text-blue-500' onClick={() => setIsLogin(true)}>Login?</p>
        </div>
    )
}

export default Register