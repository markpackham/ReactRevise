import React, {Component} from 'react';
import './customers.css';

class Customers extends Component {
    constructor() {
        super();
        this.state = {
            //Fill with data from backend
            customers: []
        }
    }

    //Run automatically when component mounted
    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
    }

    render() {
        return (
            < div >
            < h2 > Customers < /h2>
            <ul>
                {this.state.customers.map(customer=>
                    <li key={customer.id}>{ customer.firstName}
                        &nbsp; {customer.lastName}
                    </li>
                )}
            </ul>
            < /div>
    )
        ;
    }
}

export default Customers;
