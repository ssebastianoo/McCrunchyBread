import styles from "./Styles";

function Instructions() {
    const imgWidth = 150;
    return (
        <div style={styles.flex}>
            <img src="./assets/Bread.png" alt="Bread" width={imgWidth} />
            <img src="./assets/Plus.png" alt="+" width={90} />
            <img src="./assets/Nutella.png" alt="Nutella" width={imgWidth} />
        </div>
    );
}

export default Instructions;
