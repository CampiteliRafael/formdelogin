import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react"
import "./Login.css"

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando... " + "Usuário: " + username + " Senha: " + password)
    };

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Faça seu Login</h1>
                    <div className="input-field">
                        <input type="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)} />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className="icon" />
                    </div>
                    <div className="recall-forget">
                        <label>
                            <input type="checkbox" />
                            Lembre de Min
                        </label>
                        <a href="a">Esqueci minha senha</a>
                    </div>
                    <button type="submit">Fazer Login</button>
                    <div className="signup-link">
                        Não tem uma conta? <a href="#">Registrar</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
