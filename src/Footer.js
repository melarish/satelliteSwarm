import React, {Component} from 'react';

class Footer extends Component {

  render() {
    return (
        <div className="page-footer ui container">
          <div className="ui divider"></div>
          <div className="ui right floated horizontal list">
            <a href="/terms_of_use" className="item">Terms of Use</a>
            <a href="/privacy_policy" className="item">Privacy Policy</a>

          </div>
          <div className="ui horizontal list">
            <div className="disabled item">&copy; 2019 LeoLabs, Inc.</div>
          </div>
        </div>
    );
  }
}

export default Footer;
