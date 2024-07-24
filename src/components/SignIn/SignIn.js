import React, { useEffect, useRef, useState } from 'react';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCp7wXLzSwVmRUKK6d-sPvYzDh6tW4yQNs",
  authDomain: "app1-84ccc.firebaseapp.com",
  projectId: "app1-84ccc",
  storageBucket: "app1-84ccc.appspot.com",
  messagingSenderId: "281001260968",
  appId: "1:281001260968:web:6f70ceb25ee44fb88a0f9d",
  measurementId: "G-QYG4YE6MCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

const SignIn = () => {
  const containerRef = useRef(null);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        alert('User already exists. Please sign in.');
        containerRef.current.classList.remove('active'); // Switch to sign-in form
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential.user);
      alert('Account created successfully! Please sign in.');
      containerRef.current.classList.remove('active'); // Switch to sign-in form
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up: ' + error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
      alert('Signed in successfully!', {
        onClose: () => navigate('/') // Redirect to home page on alert close
      });
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        alert('Invalid credentials. Please create an account by signing up.', {
          onClose: () => {
            containerRef.current.classList.add('active'); // Switch to sign-up form
          }
        });
      } else {
        console.error('Error signing in:', error);
        alert('Error signing in: ' + error.message);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const registerBtn = registerBtnRef.current;
    const loginBtn = loginBtnRef.current;

    const handleRegisterClick = () => {
      container.classList.add('active');
    };

    const handleLoginClick = () => {
      container.classList.remove('active');
    };

    if (registerBtn && loginBtn && container) {
      registerBtn.addEventListener('click', handleRegisterClick);
      loginBtn.addEventListener('click', handleLoginClick);
    }

    return () => {
      if (registerBtn && loginBtn) {
        registerBtn.removeEventListener('click', handleRegisterClick);
        loginBtn.removeEventListener('click', handleLoginClick);
      }
    };
  }, []);

  return (
    <div className='main-container'>
      <div className='signin-container' ref={containerRef}>
        <div className='form-container sign-up'>
          <form onSubmit={handleSignUp}>
            <h1 className='create-account'>Create Account</h1>
            <div className='social-icons'>
              <Link to='#' className='icon'>
                <FontAwesomeIcon icon={faGooglePlusG} />
              </Link>
              <Link to='#' className='icon'>
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to='#' className='icon'>
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link to='#' className='icon'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </div>

            <div className='inputBox'>
              <input
                type='text'
                name='name'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span>NAME </span>
            </div>
            <div className='inputBox'>
              <input
                type='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span>EMAIL </span>
            </div>

            <div className='inputBox'>
              <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span>PASSWORD </span>
            </div>

            <div className='inputBox'>
              <input
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span>CONFIRM PASSWORD </span>
            </div>
            <div className='signInBtn'>
              <button type='submit'>Sign Up</button>
            </div>
          </form>
        </div>

        <div className='form-container sign-in'>
          <form onSubmit={handleSignIn}>
            <h1 className='Signin'>Sign In</h1>
            <div className='social-icons'>
              <Link to='#' className='icon'>
                <FontAwesomeIcon icon={faGooglePlusG} />
              </Link>
              <Link to='#' className='icon'>
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to='#' className='icon'>
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link to='#' className='icon'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </div>

            <div className='inputBox'>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span>EMAIL </span>
            </div>

            <div className='inputBox'>
              <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span>PASSWORD </span>
            </div>
            <Link to='#'>
              <u>Forget Password?</u>
            </Link>
            <div className='signInBtn'>
              <button type='submit'>Sign In</button>
            </div>
          </form>
        </div>

        <div className='toggle-container'>
          <div className='toggle'>
            <div className='toggle-panel toggle-left'>
              <h1>Welcome Back!</h1>
              <p>Enhance your experience by filling in your personal details</p>
              <button className='hidden' id='login' ref={loginBtnRef}>
                Sign In
              </button>
            </div>
            <div className='toggle-panel toggle-right'>
              <h1>Hello, Learner's!</h1>
              <p>Sign up with your personal information to unlock all the features of the site</p>
              <button className='hidden' id='register' ref={registerBtnRef}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
