import DashBoard from "./pages/dashboard.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";

export default function App() {

    return (
        <div id='root'>
            <Header titulo='Indra'/>
            <DashBoard/>
            <Footer/>
        </div>
    )
}