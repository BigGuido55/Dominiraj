import React, { Component } from "react";
import '../App.css';
import { Button, Container, ButtonGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Domina from "./domina";
const background = require('../igra.jpg');
const divStyle = {
    
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
    
};

class homepage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          modal: false,
          domina: false,
          kat1: 0,
          kat2: 0,
          niz: [],
          sve:[]
        };
        var i, j;
        var domine = [];
        for (i = 1; i < 7; i++) { 
            for (j = 1; j < 7; j++){
                domine[(i-1)*6 + j-1] = i * 10 + j;
            }
        }
        this.state.niz = domine;
        //this.giveRandom();
        //this.giveRandom();
        //this.giveRandom();
      }
    
    giveStarters = () => {
        this.giveRandom();
        this.giveRandom();
        this.giveRandom();
        document.getElementById("poc").disabled=true;
    }


    giveRandom = () => {
        var r = Math.floor(Math.random() * this.state.niz.length);
        var prva = this.state.niz[r] % 10;
        var druga = (this.state.niz[r]-prva) / 10;
        this.state.niz.splice(r, 1)
        //console.log(prva, druga);
        //console.log(this.state.niz);
        
        if (this.state.sve.length >= 5){
            alert("Imate dovoljno pločica, ne može više!");
            return;
        }

        var s = this.state.sve;
        s.push([prva, druga]);
        //console.log(s);

        this.setState({
            domina: true,
            kat1: prva,
            kat2: druga,            
            sve: s        
        });
        
    }   

    toggle = () => {
        
        this.setState({
          modal: !this.state.modal            
        });
    };

    handleBack =() => {
        this.props.history.push('/');
    }


    render() {
        return (
            <div className="App-header" style={divStyle}>
                <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"  rel="stylesheet"  type='text/css'></link>
                
                <div>
                    <div style={{"position": "absolute", "left": "0",  "margin-left": "20px", "top":"2%"}}>
                        <Button onClick={this.handleBack} >Natrag</Button>
                    </div>
                    <div style={{"position": "absolute", "right": "0",  "margin-left": "20px", "top":"2%"}}>
                        <Button onClick={this.giveRandom} >Nova pločica</Button>
                    </div>
                    <div style={{"position": "absolute", "right": "0",  "margin-left": "20px", "top":"10%"}}>
                        <Button id = "poc" onClick={this.giveStarters} >Uzmi početne</Button>
                    </div>

                    <Container style={{"position":"absolute", "bottom":"10%", "left":"10%"}}>
                    <ButtonGroup>
                    {this.state.sve.map(jedan => (                               
                               this.state.domina ? <Domina prva={jedan[0]} druga={jedan[1]}/> : null
                    ))}
                    </ButtonGroup>
                    </Container>
                    </div>
                

                
                
                
            </div>



        );
    };

};

export default homepage;