import React from 'react';
import './sign-in-component.style.scss';
import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component';
import { signInWithGoogle, auth } from '../../firebase/firebase.util';

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = async (event)=>{
        event.preventDefault();
        const {email,password} = this.state;
        await auth.signInWithEmailAndPassword(email,password)
        this.setState({email:'',password:''})
    }

    handleChange= (event)=>{
        
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

    render(){
        const {email,password} = this.state
        return(
            <div className='sign-in'>
                 <h1 >I already have an account</h1>
                 <span className='title'>Sign in with your email and password</span>
                 <form onSubmit={this.handleSubmit}>
                     
                     <FormInput onChange={this.handleChange}  label='email' type='email' value={email}   required name='email'></FormInput>
                      
                     <FormInput onChange={this.handleChange}   label='password' type='password' value={password}      required name='password'></FormInput>
                     <div className="buttons">
                     <CustomButton type='submit'>Sign In</CustomButton>
                     <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In with Google</CustomButton>
                     </div>
                    

                 </form>
            </div>
        )
    }
}

export default SignIn;