import "./App.css";
import styles from "./Styles";

import Header from "./Header";
import Instructions from "./Instructions";
import Views from "./Views";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <div style={{...styles.verticalFlex, minHeight: '50vh'}}>
                <Instructions />
                <Views />
            </div>
            <Footer />
        </div>
    );
}

export default App;
