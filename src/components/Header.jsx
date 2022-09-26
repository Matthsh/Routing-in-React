import { useNavigate } from 'react-router-dom'
import styles from '../css/Header.module.css'
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
            <ul className={styles.list}>
                <li className={styles.item}><button onClick={home}>home</button></li>
                <li className={styles.item}><button onClick={about}>about</button></li>
            </ul>
        </div>
    )
}

export default Header