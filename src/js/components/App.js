import React, { Component } from 'react';

import Footer from './Footer';
import Content from './Content';

class App extends Component {
    render() {
        return (
            <div>
              <h1>Welcome to awesome react js application</h1>  
              <Content />
              <Footer company="Commscope" />       
            </div>
        );
    }
}

export default App;
