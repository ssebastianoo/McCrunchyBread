import "./App.scss";

import Header from "./Header";
import Line from "./Line";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="vertical-flex content">
                <Line className="instructions" images={['./assets/Bread.png', {src: './assets/Plus.png', className: 'plus'}, './assets/Nutella.png']}/>
                <Line className="views" images={['./assets/Front.png', './assets/Top.png', './assets/Profile.png']}/>
            </div>
            <Footer />
        </div>
    );
}

export default App;
