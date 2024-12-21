import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";
import logo from "../assets/hyundai-img.png";
import { FaTimes } from "react-icons/fa";

const ProfileButton = ({ onLoginStatusChange }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [forgotPasswordStage, setForgotPasswordStage] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Вход
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }), // Изменил username на email
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid credentials");
      }
  
      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      setIsLoggedIn(true);
      setModalOpen(false);
      onLoginStatusChange(true);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  
  
  
  

  // Регистрация
  const handleSignUp = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      alert("Registration successful!");
      setIsSignUp(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Запрос кода для восстановления пароля
  const handleForgotPassword = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send reset code");
      }

      alert(`Code sent to ${email}`);
      setForgotPasswordStage(2);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Проверка кода восстановления
  const handleVerifyCode = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid code");
      }

      setForgotPasswordStage(3);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Сброс пароля
  const handleResetPassword = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to reset password");
      }

      alert("Password reset successful!");
      setForgotPasswordStage(0);
      setModalOpen(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Выход
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    onLoginStatusChange(false);
  };

  return (
    <div className="relative">
      {/* Кнопка профиля */}
      <button
        className="flex items-center justify-between w-full bg-gray-700 hover:bg-gray-600 border border-gray-500 px-3 py-1 rounded-lg transition duration-300"
        onClick={() => (isLoggedIn ? setMenuOpen(!isMenuOpen) : setModalOpen(true))}
      >
        <div className="flex items-center space-x-2">
          <img src={profile} alt="Profile" className="h-6 w-6 rounded-full" />
          <span className="hidden sm:inline">{isLoggedIn ? "Profile" : "Sign In"}</span>
        </div>
        <span className="sm:hidden">▼</span>
      </button>

      {/* Меню профиля */}
      {isMenuOpen && isLoggedIn && (
        <div
          className="absolute right-0 mt-2 w-full bg-gray-700 rounded-lg shadow-lg z-20"
          onMouseLeave={() => setMenuOpen(false)} // Закрыть меню, если курсор ушел
        >
          <ul className="text-white">
            <li className="hover:bg-gray-600 rounded-lg px-4 py-2" onClick={() => navigate("/account")}>
              My Account
            </li>
            <li className="hover:bg-gray-600 rounded-lg px-4 py-2" onClick={() => navigate("/settings")}>
              Settings
            </li>
            <li className="hover:bg-gray-600 rounded-lg px-4 py-2" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </div>
      )}

      {/* Модальное окно для Sign In / Sign Up / Forgot Password */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg w-96 relative">
            {/* Кнопка закрытия модального окна */}
            <button
              className="w-8 h-8 bg-gray-700 text-white absolute top-2 right-2"
              onClick={() => {
                setModalOpen(false); // Закрытие модального окна
                setForgotPasswordStage(0); // Сбросить состояние восстановления пароля при закрытии
              }}
            >
              <FaTimes className="text-white absolute left-3 bottom-1.5" />
            </button>

            {/* 1-й контейнер: Логотип */}
            <div className="flex justify-center mb-4">
              <img src={logo} alt="Hyundai Logo" className="h-16 w-auto" />
            </div>

            {/* 2-й контейнер: Поля для ввода и кнопка */}
            {forgotPasswordStage === 0 && (
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 rounded-lg border bg-gray-700 text-white"
                  placeholder={isSignUp ? "Username" : "Username or Email"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {isSignUp && (
                  <>
                    <input
                      type="email"
                      className="w-full p-2 rounded-lg border bg-gray-700 text-white"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      className="w-full p-2 rounded-lg border bg-gray-700 text-white"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      className="w-full p-2 rounded-lg border bg-gray-700 text-white"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </>
                )}
                {!isSignUp && (
                  <input
                    type="password"
                    className="w-full p-2 rounded-lg border bg-gray-700 text-white"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                )}
                <button
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
                  onClick={isSignUp ? handleSignUp : handleLogin}
                >
                  {isSignUp ? "Sign Up" : "Sign In"}
                </button>
              </div>
            )}

            {/* Forgot Password stage */}
            {forgotPasswordStage === 1 && (
              <div className="space-y-4">
                <p className="text-white">If you forgot your password, write your Email Address:</p>
                <input
                  type="email"
                  className="w-full p-2 rounded-lg border bg-gray-700 text-white"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
                  onClick={handleForgotPassword}
                >
                  Send
                </button>
              </div>
            )}

            {forgotPasswordStage === 2 && (
              <div className="space-y-4">
                <p className="text-white">A code has been sent to your email. Take a look and enter it here:</p>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg border bg-gray-700 text-white"
                  placeholder="Enter code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <button
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
                  onClick={handleVerifyCode}
                >
                  Submit
                </button>
              </div>
            )}

            {forgotPasswordStage === 3 && (
              <div className="space-y-4">
                <input
                  type="password"
                  className="w-full p-2 rounded-lg border bg-gray-700 text-white"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                  type="password"
                  className="w-full p-2 rounded-lg border bg-gray-700 text-white"
                  placeholder="Confirm New Password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                <button
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </button>
              </div>
            )}

            {/* 3-й контейнер: Ссылки */}
            {forgotPasswordStage === 0 && (
              <div className="flex justify-between text-sm text-gray-400 mt-4">
                <a href="#" className="hover:text-white" onClick={() => setForgotPasswordStage(1)}>
                  Forgot Password?
                </a>
                <a
                  href="#"
                  className="hover:text-white"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
