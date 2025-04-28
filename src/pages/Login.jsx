import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
    const { currentUser, signinWithGoogle } = UserAuth(); // Ensure UserAuth is a valid hook
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signinWithGoogle();
        } catch (error) {
            console.error("Login failed:", error.message); // Improved error logging
        }
    };

    useEffect(() => {
        if (currentUser) {
            navigate('/chat'); // Redirect to chat if user is logged in
        }
    }, [currentUser, navigate]); // Added `navigate` to dependencies

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there👋🏻</h1>
                        <p className="py-6">
                            Join the conversation and meet our gang
                        </p>
                        <button onClick={handleLogin} className="btn">
                            LOGIN WITH GOOGLE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
