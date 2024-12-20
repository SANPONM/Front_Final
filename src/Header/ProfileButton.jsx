import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png"; // Путь к картинке профиля
import logo from "../assets/hyundai-img.png"; // Логотип Hyundai
import { FaTimes } from "react-icons/fa"; // Иконка закрытия (крестик)

const ProfileButton = ({ onLoginStatusChange }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Переключение между Sign In и Sign Up
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Статус входа
  const [username, setUsername] = useState("");
  const [useradress, setUseradress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState(""); // Для ввода email
  const [code, setCode] = useState(""); // Для ввода кода
  const [newPassword, setNewPassword] = useState(""); // Для нового пароля
  const [confirmNewPassword, setConfirmNewPassword] = useState(""); // Для подтверждения нового пароля
  const [forgotPasswordStage, setForgotPasswordStage] = useState(0); // Этапы восстановления пароля

  const navigate = useNavigate();

  const handleLogin = () => {
    if ((username || useradress) && password) {
      setIsLoggedIn(true);
      setModalOpen(false); // Закрытие модального окна
      onLoginStatusChange(true);
    } else {
      alert("Please enter valid credentials.");
    }
  };

  const handleSignUp = () => {
    if (username && email && password && password === confirmPassword) {
      // После успешной регистрации:
      setIsLoggedIn(false); // Устанавливаем статус входа
      setModalOpen(true); // Закрытие модального окна
      setIsSignUp(false); // Переключаемся обратно на экран входа
    } else {
      alert("Please make sure all fields are filled correctly and passwords match.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Устанавливаем статус выхода
    onLoginStatusChange(false);
  };

  const handleForgotPassword = () => {
    if (email) {
      alert(`Code sent to ${email}`); // Имитация отправки кода на email
      setForgotPasswordStage(2); // Переход к следующему этапу
    } else {
      alert("Please enter your email.");
    }
  };

  const handleVerifyCode = () => {
    if (code) {
      setForgotPasswordStage(3); // Переход к этапу смены пароля
    } else {
      alert("Please enter the code sent to your email.");
    }
  };

  const handleResetPassword = () => {
    if (newPassword && newPassword === confirmNewPassword) {
      setIsLoggedIn(false); // Успешная смена пароля
      setModalOpen(true); // Закрытие модального окна
      setForgotPasswordStage(0);
    } else {
      alert("Passwords do not match.");
    }
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
