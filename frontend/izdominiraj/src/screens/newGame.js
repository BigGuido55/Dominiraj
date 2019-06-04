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
          sve:[],
          score: 0,
          r: 0,
          bottom: 200,
          left: 0,
          i: 1,
          zadnji: 0
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
    
    moveDomina = (id) => {
        document.getElementById(id).style.position = "absolute";
        if (this.state.i===1){
            document.getElementById(id).style.bottom = this.state.bottom + 'px';
            document.getElementById(id).style.left = this.state.left + 'px';
            
        }
        
        else if (this.state.zadnji === this.state.sve[id][1]){
            console.log("asdfgh");
            document.getElementById(id).style.transform = "rotate(180deg)";
            var dim = this.state.left + 50;
            var mid = this.state.bottom + 50;
            document.getElementById(id).style.left = dim + 'px';
            document.getElementById(id).style.bottom = mid + 'px';
            this.setState({
                left : dim,
                bottom: mid
            });
        }

        else{
            //console.log(this.state.i);
            var dim = this.state.left + 50;
            var mid = this.state.bottom + 50;
            document.getElementById(id).style.left = dim + 'px';
            document.getElementById(id).style.bottom = mid + 'px';
            this.setState({
                left : dim,
                bottom: mid
            });
        }
        this.setState({
            i : this.state.i + 1
        });
        
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
        

        var s = this.state.sve;
        s.push([prva, druga]);
        //console.log(s);

        this.setState({
            domina: true,
            kat1: prva,
            kat2: druga,            
            sve: s,
            r: r        
        });
        
    }   

    setZadnji = (zad) => {
        this.setState({
            zadnji: zad

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


    handleScoreChange = (s) => {
        this.setState({
            score: this.state.score + s
        });
        //console.log(this.state.score);
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
                    <ButtonGroup style={{"position":"fixed", "height":"50px"}}>
                    {this.state.sve.map((jedan, index) => (                            
                            this.state.domina ? <Domina identifikator = {index} zadnji={this.state.zadnji} setZadnji = {this.setZadnji} prva={jedan[0]} druga={jedan[1]} moveDomina={this.moveDomina} handleScoreChange={this.handleScoreChange}/> : null
                              
                    ))}
                    </ButtonGroup>

                    

                    </Container>
                    </div>
                

                
                
                
            </div>



        );
    };

};

export default homepage;