import { Component} from "react";
import Carro from "./Carro";
import Logo from "./Logo";

const styles = {
    navbar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: '100px',
        justifyContent: "space-between",
        position: "relative",
        padding: '0px 50px',
        boxShadow: '0px 2px 3px rgb(0, 0, 0, 0.5)',
    }
}
class Navbar extends Component {
    render(){
        const { carro } = this.props;
        return(
            <nav style={styles.navbar}>
                <Logo />
                <Carro carro={ carro }/>
            </nav>
        )
    }
}
      
export default Navbar;