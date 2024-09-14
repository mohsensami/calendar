import { useForm } from './lib';
import { requiredValidator, minValidator, maxValidator, emailValidator } from './lib/validators/rules';
import Input from './lib/components/Input.js';

import './App.css';

const App: React.FC = () => {
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
        <div className="App">
            <h1>My App</h1>
            <form action="#" className="login-form">
                <div className="login-form__username">
                    <Input
                        className="login-form__username-input"
                        id="username"
                        type="text"
                        placeholder="نام کاربری یا آدرس ایمیل"
                        element="input"
                        validations={[requiredValidator(), minValidator(8), maxValidator(20), emailValidator()]}
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
                        placeholder="رمز عبور"
                        validations={[requiredValidator(), minValidator(8), maxValidator(18)]}
                        onInputHandler={onInputHandler}
                    />

                    <i className="login-form__password-icon fa fa-lock-open"></i>
                </div>
                <button
                    className={`login-form__btn ${
                        formState.isFormValid ? 'login-form__btn-success' : 'login-form__btn-error'
                    }`}
                    type="submit"
                    disabled={!formState.isFormValid}
                >
                    <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
                    <span className="login-form__btn-text">ورود</span>
                </button>
            </form>
        </div>
    );
};

export default App;
