import React, { Component } from "react";
import '../App.css';
import { Button, Container, ButtonGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionModal from "./questionModal";
const background = require('../igra.jpg');
const divStyle = {
    
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
    
};

class homepage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          modal: false
        };
      }

    handleInstructions = () => {
        this.props.history.push('/instructions');
    }

    handleHighscores = () => {
        this.props.history.push('/highscores');
    }

    handleStart = () => {
        this.props.history.push('/start');
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
                    <Button style={{"position":"relative", "top":"50%", "left":"50%"}} onClick={this.toggle}>
                        Pitanje
                    </Button>
                    </div>
               
                <QuestionModal
                    modal={this.state.modal}
                    toggle={this.toggle} />

                <Container style={{"position":"absolute", "bottom":"5%"}} className="App-tekst">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Container>
                <ButtonGroup style={{"position":"absolute", "right":"5%", "bottom":"12%" }}>
                <Button size="lg" className="btn-art" >
                    <i class="fa fa-paint-brush"></i>
                </Button>
                <Button size="lg" className="btn-geo lg">
                    <i class="fa fa-globe"></i>
                </Button>
                <Button size="lg" className="btn-sport lg">
                    <i class="fa fa-soccer-ball-o"></i>
                </Button>
                <Button size="lg" className="btn-his lg">
                    <i class="fa fa-history"></i>
                </Button>
                <Button size="lg" className="btn-sci lg">
                    <i class="fa fa-calculator"></i>
                </Button>
                <Button size="lg" className="btn-cro lg">
                    <i class="fa fa-heart"></i>
                </Button>
                
                </ButtonGroup>
            </div>



        );
    };

};

export default homepage;