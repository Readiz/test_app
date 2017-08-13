import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: Math.round(Math.random()*100)
        };

        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(randomValue){
        this.setState({
            value: randomValue
        });
    }

    sayHey(){
        alert("hey");
     }
 
     render(){
        let text = "Dev-Server";

        let pStyle = {
            color: 'aqua',
            backgroundColor: 'black'
        };

        return  ( /* Render Comment Test */
            <div>
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle }
                          body={ this.props.contentBody }/>
                <RandomNumber number={this.state.value}
                        onUpdate={this.updateValue} />
                <h1> Hello Readiz!</h1>
                <h2> Welcome to {text}</h2>
                <button onClick= {this.sayHey}>Click Me</button>
                <p style = {pStyle}>{1 == 1 ? 'True' : 'False'}</p>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};

export default App;