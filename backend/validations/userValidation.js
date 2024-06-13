const { body } = require('express-validator');

const signUpValidation = () => {
    return [body('email',"Enter valid email").isEmail(),
    body('name',"Minimum length is 5").isLength({ min: 5 }),
    body('password',"Minimum length is 5").isLength({ min: 5 })
    ];
}

const loginValidation = () => {
    return [body('email',"Enter valid email").isEmail(),
    body('password',"Minimum length is 5").isLength({ min: 5 })]
}

module.exports = {
    signUpValidation: signUpValidation,
    loginValidation: loginValidation
}

