import { Component } from "react";

const styles = {
    logo:{
        fontSize: '2rem',
        fontWeight: '700',
        fontFamily: 'times new roman',
    }
}

 class Logo extends Component {
    render(){
        return(
            <div style={styles.logo}>
                Camila Store
            </div>
        )
    }
}


export default Logo;