
export const registerDefaultData = {
    'email': {
        name: 'email',
        value: '',
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        isRequired: true,
        errors: []
    },
    'password': {
        name: 'password',
        value: '',
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
        isRequired: true,
        errors: []
    },
    'confirmPassword': {
        name: 'confirmPassword',
        value: '',
        regex: '',
        isRequired: true,
        errors: []
    },
    'pic': {
        name: 'pic',
        value: null,
        regex: '',
        isRequired: false,
        errors: []
    }
}