import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate();

    function home() {
        navigate("/");
    }

    function about() {
        navigate("/about")
    }
    return (
        <div>
            <ul>
                <li><button onClick={home}>home</button></li>
                <li><button onClick={about}>about</button></li>
            </ul>
        </div>
    )
}

export default Header