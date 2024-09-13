# Modal React

## Manual Setup

## Demo

## Installation

To use the Modal component, you need to have a React environment set up. You can then add the Modal component files to your project.

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install @mohsensami/react-hook-form
```

## Usage

React Component:

```javascript
import { useForm } from '@mohsensami/react-hook-form';
import { requiredValidator, minValidator, maxValidator } from '@mohsensami/react-hook-form/validators/rules';
import Input from '@mohsensami/react-hook-form/components/Input.js';

const [formState, onInputHandler] = useForm(
    {
        username: {
            value: '',
            isValid: false,
        },
        password: {
            value: '',
            isValid: false,
        },
    },
    false
);

return (
    <form action="#" className="login-form">
        <div className="login-form__username">
            <Input
                className="login-form__username-input"
                id="username"
                type="text"
                placeholder="Username"
                element="input"
                validations={[requiredValidator(), minValidator(8), maxValidator(20)]}
                onInputHandler={onInputHandler}
            />
            <i className="login-form__username-icon fa fa-user"></i>
        </div>
        <div className="login-form__password">
            <Input
                element="input"
                id="password"
                type="password"
                className="login-form__password-input"
                placeholder="Password"
                validations={[requiredValidator(), minValidator(8), maxValidator(18)]}
                onInputHandler={onInputHandler}
            />

            <i className="login-form__password-icon fa fa-lock-open"></i>
        </div>
        <button
            className={`login-form__btn ${formState.isFormValid ? 'login-form__btn-success' : 'login-form__btn-error'}`}
            type="submit"
            disabled={!formState.isFormValid}
        >
            <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
            <span className="login-form__btn-text">ورود</span>
        </button>
    </form>
);
```

## Props

## Authors

-   [@mohsensami](https://github.com/mohsensami)

## Contributing

If you want to contribute to this project and make it better, your help is very welcome. Create an issue or submit a pull request.
