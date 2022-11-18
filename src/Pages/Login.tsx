import { useContext, useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { TopicContext } from '../App';
import EButton from "../Component/EButton";
import useTopics from '../Hooks/useTopics';
import "./pages.scss";

export default function Login() {
    const navigate = useNavigate();
    const { setUserName } = useContext(TopicContext);
    const { getTopics } = useTopics();
    const [name, setName] = useState<string>("");
    


    return (
        <div className="login">
            <div className="login-card">
                <div className="login-card-title">User Name</div>

                <div className="login-card-input">
                    <label htmlFor="username" className="login-card-input-label">Email</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="login-card-input-field" name="username" type={"text"} />
                    <EButton buttonText="Login" onPress={() => {
                        getTopics(name);
                        setUserName(name);
                    }} />
                </div>

                <div className="info-text">
                    <p>Use Your User Name To Get Logged In</p>
                </div>

            </div>
        </div>
    );
}
