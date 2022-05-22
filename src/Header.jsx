import styles from "./Styles";

function Header() {
    return (
        <header style={{...styles.flex, minHeight: '40vh'}}>
            <img src="./assets/45.png" alt="McCrunchy Box" width="500px" />
            <img
                src="./assets/Title.png"
                alt="Graffiti"
                style={style.title}
                width="700px"
            />
        </header>
    );
}

const style = {
    title: {
        position: "absolute",
        zIndex: -1,
    },
};

export default Header;
