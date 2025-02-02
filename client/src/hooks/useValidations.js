const useValidations = () => {
    const validate = (field) => {
        const errors = [];
        if(field.isRequired === true && field.value === ''){
            console.log('here inside required');
            
            errors.push(`${field.name} is required`);
        }

        if(field.regex !== '' && !field.regex.test(field.value)){            
            if(field.name === 'email'){
                errors.push('invalid email')
            }

            if(field.name === 'password'){                
                errors.push('Password must be at least 8 characters long, include an uppercase, a lowercase, a number, and a special character')
            }
        }
        return errors;
    }
    return validate;
}


export default useValidations;