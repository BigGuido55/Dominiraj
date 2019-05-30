import React, { Component } from "react";
import '../App.css';
import { Button } from "reactstrap";
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
            <div >
                
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


            </div>
            </div>



        );
    };

};

export default homepage;