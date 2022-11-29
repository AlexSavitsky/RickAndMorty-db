import './style.scss';
import Menu from "../../components/Menu"
const Main = () => {
    return(
        <div className="main-page__container">
            <h1> Welcome to information portal Rick and Morty</h1>
            <h2>Choose your category</h2>
            <Menu></Menu>
        </div>
    );
}

export default Main;