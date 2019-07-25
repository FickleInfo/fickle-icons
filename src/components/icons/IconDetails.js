import React, { Component } from 'react';
import {Icon} from '@fickleinfo/react-icons';

class IconDetails extends Component {

  render() {
    console.log(this.props.iconData, 'iconData')
    return (
      <div className={this.props.popupStatus === true ? "react-fickle-icons-popup open" : "react-fickle-icons-popup"}>
       <div className="react-fickle-dialog">
        <div className="react-fickle-icons-popup-header">
          <h2>Get the Code</h2>
          <span className="react-fickle-close-icon" onClick={this.props.handlePopupClose} ><Icon name="fa fa-close" /></span>
        </div>
        <div className="react-fickle-icons-content">
            <div className="react-fickle-data">
              <p>Install and Import <code>fickle-icon</code> from <a href="#" targe="_blank">NPM</a></p>
              <p>Copy & paste the HTML code</p>
              <strong>Preview</strong>
               <Icon name={this.props.iconData.icon_class} />
            </div>
            <div className="react-fickle-icon-code">
               <code>
                  {`<Icon name="`+this.props.iconData.icon_class+`" />`}
               </code>
            </div>
         </div>
        </div>
      </div>
    );
  }
}

export default IconDetails;
