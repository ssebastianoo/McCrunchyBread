import styles from "./Styles";

function Views() {
    const imgWidth = 200;
    return (
        <div style={styles.flex}>
            <img alt="Front" src='./assets/Front.png' width={imgWidth} />
            <img alt="Top" src='./assets/Top.png' width={imgWidth} />
            <img alt="Profile" src='./assets/Profile.png' width={imgWidth} />
        </div>
    )
}

export default Views;