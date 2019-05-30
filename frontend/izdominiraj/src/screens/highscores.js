import React, { Component } from "react";
import "../App.css";
import {
  Table, Button
} from "reactstrap";
const background = require('../domino.jpg');
const divStyle = {
    
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center top' 
};

class Highscores extends Component {
    handleBack =() => {
        this.props.history.push('/');
    }
    render() {
        return(
            <div className="App-header" style={divStyle} >
                <div style={{"position": "absolute", "left": "0",  "margin-left": "20px", "top":"2%"}}>
                        <Button onClick={this.handleBack} >Natrag</Button>
                </div>
                <div>
                <Table bordered hover dark responsive style={{"position": "fixed", "width": "80%", "top":"40%", "left": "10%"}} >
                    <thead>
                        
                    <tr>
                        <th>Mjesto</th>
                        <th>Id</th>
                        <th>Rezultat</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>12345</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Jacob</td>
                        <td>12345</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Jacob</td>
                        <td>234567</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Jacob</td>
                        <td>234567</td>
                    </tr>
                    
                    </tbody>
                </Table>
                </div>
                
            </div>
        );
    };
};

export default Highscores;