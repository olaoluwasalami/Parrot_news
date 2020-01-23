import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    Container,
    Button
} from 'reactstrap';

export default class Header extends Component {
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }    

    constructor(props) {
        super(props)
        this.state = {
             isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }
    

    render() {
        return (
            <div>
               <Navbar color="light" light expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Parrot News</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <Button color="blue" className="mr-3 btn-sm">Register</Button>
                            <Button color="info" outline className="btn-sm">Sign in</Button>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}