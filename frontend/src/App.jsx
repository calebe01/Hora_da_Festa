import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Novo estado para registro
  const [registeredCredentials, setRegisteredCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    // Simulação de verificação de credenciais (substitua por sua lógica real)
    if (username === "" && password === "") {
      setAuthenticated(true);
      toast.success("Login bem-sucedido!");
    } else {
      toast.error("Credenciais inválidas!");
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setIsLogin(true)
    setUsername("")
    setPassword("")
  };

  const handleRegister = () => {
    if (username.trim() !== "" && password.length >= 6) {
      setRegisteredCredentials({ username, password }); // Armazenar credenciais      
      setIsLogin(true)
      setUsername("");
      setPassword("");
      toast.success("Registro bem-sucedido!");
    } else {
      toast.error("Nome de usuário vazio ou senha muito curta!");
    }
  };

  const handleChangeRegisterView = () => {
    setAuthenticated(false)
    setIsLogin(false)
  }
  
  const handleChangeBack = () => {
    setAuthenticated(false)
    setIsLogin(true)
  }
  
  const handleLoginAfterRegistration = () => {
    if (isLogin) {
      if (username === "" || password === "") {
        toast.error("Preencha o usuário e senha para fazer login.");
      } else {
        // Usar as credenciais registradas para login
        if (
          username === registeredCredentials.username &&
          password === registeredCredentials.password
        ) {
          setAuthenticated(true);          
          toast.success("Login bem-sucedido!");
          return;
        }
        toast.error("Credenciais inválidas!");
      }
    } else {
      toast.error("Você ainda não está registrado.");
    }
  };

  return (
    <div className="App">
      <ToastContainer />      
      {authenticated ? (
        // Se autenticado, exibe o conteúdo protegido
        <div className="main-authenticated">
          <Navbar onClose={handleLogout} />          
          <div>          
            <h2>Bem-vindo!</h2>
            <Outlet />
          </div>
        </div>
      ) : isLogin ? (
        // Se registrado, exibe o formulário de login
        <div className="main-login">
          <div className="login-form">
            <h2>Faça login</h2>
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLoginAfterRegistration}>Entrar</button>
            <button onClick={handleChangeRegisterView}>Registrar</button>
          </div>
        </div>
      ) : (
        // Se não autenticado nem registrado, exibe o formulário de registro
        <div className="main-login">
          <div className="register-form">
            <h2>Registre-se</h2>
            <input
              type="text"
              placeholder="Novo usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Nova senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Registrar</button>
            <button onClick={handleChangeBack}>Voltar para Login</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;