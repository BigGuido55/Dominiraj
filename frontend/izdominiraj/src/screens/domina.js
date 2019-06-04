import React, { Component } from "react";
import "../App.css";
import {
    ButtonGroup,
  Container,
  
  Button
} from "reactstrap";

class Domina extends Component {
    

    render() {
        return(
            <Container >
                <ButtonGroup  >
                {this.props.prva === 1 ? <Button size="lg" className="btn-art" >
                        <i class="fa fa-paint-brush"></i>
                    </Button> : null}
                {this.props.prva === 2 ? <Button size="lg" className="btn-geo lg">
                        <i class="fa fa-globe"> </i>
                    </Button> : null}
                {this.props.prva === 3 ? <Button size="lg" className="btn-sport lg">
                        <i class="fa fa-soccer-ball-o"></i>
                    </Button> : null}
                {this.props.prva === 4 ? <Button size="lg" className="btn-his lg">
                        <i class="fa fa-history"></i>
                    </Button> : null}
                {this.props.prva === 5 ? <Button size="lg" className="btn-sci lg">
                        <i class="fa fa-calculator"></i>
                    </Button> : null}
                {this.props.prva === 6 ? <Button size="lg" className="btn-cro lg">
                        <i class="fa fa-heart"></i>
                    </Button> : null}



                {this.props.druga === 1 ? <Button size="lg" className="btn-art" >
                        <i class="fa fa-paint-brush"></i>
                    </Button> : null}
                {this.props.druga === 2 ? <Button size="lg" className="btn-geo lg">
                        <i class="fa fa-globe"></i>
                    </Button> : null}
                {this.props.druga === 3 ? <Button size="lg" className="btn-sport lg">
                        <i class="fa fa-soccer-ball-o"></i>
                    </Button> : null}
                {this.props.druga === 4 ? <Button size="lg" className="btn-his lg">
                        <i class="fa fa-history"></i>
                    </Button> : null}
                {this.props.druga === 5 ? <Button size="lg" className="btn-sci lg">
                        <i class="fa fa-calculator"></i>
                    </Button> : null}
                {this.props.druga === 6 ? <Button size="lg" className="btn-cro lg">
                        <i class="fa fa-heart"></i>
                    </Button> : null}
                </ButtonGroup>
            </Container>

        );
    };
};

export default Domina;