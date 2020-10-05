import React, { Component } from 'react';
import Layout from '../components/layout';
import Card from '../components/card';
import Hero from '../components/hero';
import { data } from '../common/data';
import moment from 'moment';

export default class index extends Component {
  state = {
    apiDataTree: null,
  };

  componentDidMount() {
    // Here we are simulating API call.
    this.setState({ apiDataTree: data });
  }
  render() {
    const { apiDataTree } = this.state;
    return (
      apiDataTree !== null && (
        <Layout>
          <Hero
            src='/assets/download 1.svg'
            code={apiDataTree.code}
            reciever={apiDataTree.receiver.first_name}
            status={apiDataTree.status}
          />
          <main>
            <article>
              <p>Data e ora</p>
              <Card
                icon='/assets/20.svg'
                fc={moment(apiDataTree.dropoff_start).format('dddd D MMMM')}
                p={
                  moment(apiDataTree.dropoff_start).format('HH:mm') +
                  ' - ' +
                  moment(apiDataTree.dropoff_end).format('HH:mm')
                }
              />
            </article>
            <article>
              <p>Indirizzo</p>
              <Card
                icon='/assets/21.svg'
                fc='Milano'
                p={apiDataTree.receiver.address.full_address}
              />
            </article>
          </main>
          <section className='modifyDelivery'>
            <a>Modifica info spedizione</a>
          </section>
        </Layout>
      )
    );
  }
}
