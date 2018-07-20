'use strict'
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

class Blog extends React.Component {

    // Default Props
    static defaultProps = {
        
    }

    state = {
        itemList: null
    }

    /**
     * Handle Functions
     */
    getItemList = () => {
        $.ajax({
            url: "/article/getlist",
            success: (result) => {
                console.log(result);
            }
        });
    };

    componentDidMount () {
        this.getItemList()
    }

    render() {
        return <div>Hello {this.props.name}</div>
    }
}

ReactDOM.render(<Blog name="Mio"/>, document.getElementById("blog-mount-point"))