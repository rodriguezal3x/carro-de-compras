import { Component } from "react";

const styles = {
    detallesCarro:{
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },
}
class DetallesCarro extends Component { 
    render() { 
        return(  
            <div style={styles.detallesCarro}>
                Chanchito Feliz
            </div>
        )
    }
}

export default DetallesCarro;