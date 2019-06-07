import React, { Component } from "react";
import "../App.css";
import {
  Table, Button
} from "reactstrap";
import axios from "axios";
const background = require('../domino.jpg');
const divStyle = {
    
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center top' 
};

class Highscores extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          scores: []
        };
    }

    handleBack =() => {
        this.props.history.push('/');
    }

    componentDidMount = () =>{
        axios({
            method: "GET",
            url:
              "http://localhost:59487/api/domino/highscore",
            headers: { "Content-Type": "application/json"}
          }).then(res => {
            this.setState({
                scores: res.data
            });
            console.log(
              "Ovo su podaci koje dobiješ nazad od servera. ",
              res.data
            ); 
          }).catch(err => {
            if (!err.response) {
              alert('Nije moguće komunicirati sa poslužiteljem! Provjerite da li je upaljen..');
              return;
            }    
            const code = err.response.status;    
            if (code >= 500) {
                alert('Problem sa serverom! Pogledajte ispise..');
                return;
            }    
            alert('Nepoznata greška! ' + JSON.stringify(err));
          });
          console.log("ušao");
        console.log(this.state.scores);

    }
    render() {
        return(
            <div className="App-header" style={divStyle} >
                <div style={{"position": "absolute", "left": "0",  "margin-left": "20px", "top":"2%"}}>
                        <Button onClick={this.handleBack} >Natrag</Button>
                </div>
                <div>
                <Table bordered hover dark responsive style={{"position": "fixed", "width": "80%", "top":"30%", "left": "10%"}} >
                    <thead>
                        
                    <tr>
                        <th>Mjesto</th>
                        <th>Ime igrača</th>
                        <th>Bodovi</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.scores.map((s, index) => (                            
                            <tr>
                            <th scope="row">{index+1}</th>
                            <td>{s.playerName}</td>
                            <td>{s.points}</td>
                        </tr>
                    ))}
                    
                    </tbody>
                </Table>
                </div>
                
            </div>
        );
    };
};

export default Highscores;