import { useState } from "react"; 

export default function SignUp() {

    const[fullName, setFullName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[error, setError] = useState("");
    

    function handleSubmit(e) {
        e.preventDefault();

        if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }

        if(!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
            setError("Please enter a valid Email");
            return;
        }

        if(password.length < 6){
            setError("Password should have atleast 6 characters")
            return
        }

        if(confirmPassword !== password){
            setError("Passwords do not match")
            return;
        }
        setError("");
        alert("SignUp Successful!!");
        console.log({ fullName, email, password });
    
    }

    return (
    <div className="flex items-center  justify-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl/30 p-6 rounded-2xl  w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border px-3 py-2 mb-3 rounded"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 mb-3 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border px-3 py-2 mb-4 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}


