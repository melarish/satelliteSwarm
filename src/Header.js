import React, {Component} from 'react';

class Header extends Component {

  render() {
    return (
        <div className="ui top fixed inverted menu">
          <a href="/" className="desktop-only header item">
            <img className="logo"
                 src="https://platform-cdn.leolabs.space/static/images/leolabs-logo-eye.png?8afeebbb0f0d392a34ab02f367f0b69aefefd659"
                 title="LeoLabs"/>
          </a>

          <a href="/catalog" className="item desktop-only"><i className="globe icon"></i> Explore LEO</a>


          <div className="ui dropdown item desktop-only">
            Operator
            <i className="dropdown icon"></i>
            <div className="menu">
              <a href="/constellations" className="item">Constellations</a>
              <a href="/conjunctions/screenings" className="item">Conjunction Screenings (Beta)</a>
              <a href="/conjunctions/search" className="item">Conjunction Search</a>
            </div>
          </div>


          <div className="ui dropdown item desktop-only">
            Analyst
            <i className="dropdown icon"></i>
            <div className="menu">
              <a href="/catalog/changes" className="item">Change Detection</a>
              <a href="/launches" className="item">Launch Tracking</a>
              <a href="/bulk_data_download" className="item">Bulk Data Download</a>
            </div>
          </div>


          <div className="active-nav-section item desktop-only">
            Developer
          </div>

          <div className="right menu">

            <a className="trial-account item" href="/organization/about-trials">
              <div className="ui yellow label">Trial</div>
            </a>


            <div className="ui desktop-only dropdown item">
              <i className="users icon"></i>
              Super Evil Megacorp

              <i className="dropdown icon"></i>
              <div className="menu">
                <a href="/organization/change_organization_info" className="item">Edit Organization</a>

                <a href="/organization/users" className="item">Users</a>

                <a href="/organization/access" className="item">Data Access</a>
                <a href="/organization/usage" className="item">Usage</a>
                <a href="/organization/keys" className="item">API Keys</a>
                <a href="/organization/queries" className="item">Queries</a>
                <a href="/organization/notifications" className="item">Notifications</a>
                <a href="/organization/documents" className="item">Documents</a>
              </div>

            </div>


            <div className="ui user-management dropdown item">
              <i className="user icon"></i>
              <div className="menu">
                <a className="disabled switch-account item">
                  Switch Organization
                  <p className="current-account-text">
                    Current: Super Evil Megacorp
                  </p>
                </a>
                <a href="/user/change_user_info" className="item">Edit Profile</a>
                <a href="/user/change-password" className="item">Change Password</a>
                <a href="/user/keys" className="item">Manage API Keys</a>
                <div className="divider"></div>
                <a href="/organization/join" className="item">Join Organization</a>
                <a href="/organization/create" className="item">Create Organization</a>
                <div className="divider"></div>
                <a href="/user/sign-out" className="item">Logout</a>
              </div>
            </div>

          </div>
        </div>
        );
    }
}

export default Header;