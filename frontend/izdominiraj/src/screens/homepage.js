import React, {Component} from "react";
import '../App.css';
import {Button, ButtonGroup} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";



class homepage extends Component {
    
    render(){
        return(
            <div className="App-header">
                
                <div>
                    <h3 color="black">Dominiraj</h3>
                    <br/>
                    
                    <ButtonGroup className="col-md-12 "> 
                        <Button style={{"margin-bottom": "25px"}} color="primary" size="lg" > Pokreni novu igru </Button>
                    </ButtonGroup>
                    
                    <ButtonGroup className="col-md-12"> 
                        <Button style={{"margin-bottom": "25px"}} color="primary" size="lg" > Najbolji rezultati </Button>
                        
                    </ButtonGroup>
                    <ButtonGroup className="col-md-12"> 
                        <Button style={{"margin-bottom": "25px"}} color="primary" size="lg" > Pravila </Button>
                    </ButtonGroup>
                    
                </div>
                
            </div>
            

            

        );
    };

};

export default homepage;