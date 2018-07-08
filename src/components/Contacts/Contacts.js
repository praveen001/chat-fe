import React from 'react';

class Contacts extends React.Component {
  componentDidMount() {
    this.props.loadContacts();
  }

  render() {
    if (this.props.loading) {
      return <div>Loading</div>;
    }
    return this.props.children;
  }
}

export default Contacts;