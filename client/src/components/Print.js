import React, {Component} from 'react';
import "../../src/css/SearchDirectoryPage.css";
class Print extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({data:nextProps.data});
    }

    render() {
        let data = this.state.data;
    return(

       <p>{(data)?data.map((filter, i) => {
           let toPrint=[];
           toPrint.push(<div className="sd-search-results">
                <a href="https://www.ugm.org/" className="sd-link" target="_blank">
                    <h1>{filter.name}</h1>
                </a>
                <p>Phone: {filter.phone}</p>
                <p>Address: {filter.address}</p>
                <p>Email: {filter.email}</p>

                <p>{filter.operationHours}</p>
                {/*<p>9:30 AM - 3:00 PM</p>*/}

                <p>
                    {filter.description}
                </p>
            </div>);
            return (toPrint);
       }):null}</p>
    )
}
}
export default Print;