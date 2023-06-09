import { Link, useNavigate } from "react-router-dom"
import FirebaseContext from '../context/firebase';
import { useContext, useEffect ,useState} from "react";
import * as ROUTES from '../constants/routes';
import { doesUserNameExist } from "../services/firebase";

export default function Login() {
    const history = useNavigate();
    const { firebase } = useContext(FirebaseContext);

    const[emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [fullName, setFullname] = useState('');


    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleSignUp = async(event) => {
        event.preventDefault();

        const usernameExist = await doesUserNameExist(username);
        if(!usernameExist.length){
            try {
                const createdUserResult = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(emailAddress, password); 
                
                //Authentication
                // -> emailAddress & password & username(displayName)
                await createdUserResult.user.updateProfile({
                    displayName: username
                });
                
                //firebase user collection (create & document)
                await firebase.firestore().collection('users').add({
                    userId: createdUserResult.user.uid,
                    username: username.toLowerCase(),
                    fullName,
                    emailAddress: emailAddress.toLowerCase(),
                    following: [],
                    dateCreated: Date.now()
                });

                history(ROUTES.DASHBOARD);
            } catch (error) {
                setEmailAddress('');
                setFullname('');
                setPassword('');
                setError(error.message);
            }
        } else {
            setError('username is already taken, please try another.');
        }
    };

    useEffect(() => {
        document.title = 'Sign Up-Instagram'
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md  items-center h-screen">
            <div className="flex w-3/5">
                <img src="/image/home-phones.png" alt="iphone with Instagram app" />
                <div className="flex w-2/5">
                    <img src="/image/screenshot1.png" alt="iphone with Instagram app" />
                </div>
            </div>
            
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 border 
                border-gray-primary mb-4 rounded">
                    <h1 className="flex justify-center w-full">
                        <img src="/image/logo.png" alt="Intagram" className="mt-2 w-6/12 mb-4" />
                    </h1>

                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
                    <form onSubmit={handleSignUp} method="POST">
                        <input
                            aria-label="Enter your username"
                            type="text"
                            placeholder="User Name"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setUsername(target.value)}
                            value={username}
                        />
                        <input
                            aria-label="Enter your full name"
                            type="text"
                            placeholder="Full Name"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setFullname(target.value)}
                            value={fullName}

                        />
                        <input
                            aria-label="Enter your email address"
                            type="text"
                            placeholder="Email address"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setEmailAddress(target.value)}
                            value={emailAddress}

                        />
                        <input
                            aria-label="Enter your password"
                            type="password"
                            placeholder="Password"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setPassword(target.value)}
                            value={password}

                        />
                        <br/>
                        <br/>
                        <button 
                        disabled={isInvalid} 
                        type="submit"
                        className={`bg-blue-medium text-white w-full rounded h-8 font-bold
                        ${isInvalid && 'opacity-50'}`}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
                    <p className="text-sm">Have an account?{` `}
                    <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
                        Log In
                    </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

