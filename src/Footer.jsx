import styles from "./Styles";

function Footer() {
    const imgWidth = 110;
    return (
        <div style={{...styles.flex, minHeight: '10vh'}}>
            <div style={{ ...styles.flex, ...style.div }}>
                <img alt="Front" src="./assets/McDonald.png" width={imgWidth} />
                <img alt="Top" src="./assets/Price.png" width={imgWidth} />
            </div>
        </div>
    );
}

const style = {
    div: {
        margin: '0 50px',
        bottom: 30,
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
};

export default Footer;
