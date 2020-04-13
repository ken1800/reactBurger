import React, { Component } from 'react';
import Layout from './components/Layouts/Layout';
import BugerBuilder from './containers/BugerBuilder/BurgerBuilder'


class App extends Component {
  render() {
    return (
      <div>  
        <Layout>
          <BugerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
