import React, {Component} from "react";
import '../App.css';
import {Button, ButtonGroup} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const background = require('../domino.jpg');
const divStyle = {
    
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center top' 
};


class homepage extends Component {
    
    handleInstructions = () =>{
        this.props.history.push('/instructions');
    }

    handleHighscores = () =>{
        this.props.history.push('/highscores');
    }

    handleStart = () =>{
        this.props.history.push('/start');
    }
    
    

    render(){
        return(
            <div className="App-header" style={divStyle}  >
                
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    <ButtonGroup className="col-md-12 "> 
                        <Button style={{"margin-bottom": "25px"}} onClick = {this.handleStart} color="primary" size="lg" > Pokreni novu igru </Button>
                    </ButtonGroup>
                    
                    <ButtonGroup className="col-md-12"> 
                        <Button style={{"margin-bottom": "25px"}} onClick = {this.handleHighscores} color="primary" size="lg" > Najbolji rezultati </Button>
                        
                    </ButtonGroup>
                    <ButtonGroup className="col-md-12"> 
                        <Button style={{"margin-bottom": "25px"}} onClick = {this.handleInstructions} color="primary" size="lg" > Pravila </Button>
                    </ButtonGroup>
                    
                </div>
                
            </div>
            

            

        );
    };

};

export default homepage;