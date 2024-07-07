import DashBoard from "./pages/Dashboard/dashboard.tsx";
import Header from "./components/Header/header.tsx";
import Footer from "./components/Footer/footer.tsx";

export default function App() {

    return (
        <div id='root'>
            <Header titulo='Indra'/>
            <DashBoard/>
            <Footer/>
        </div>
    )
}