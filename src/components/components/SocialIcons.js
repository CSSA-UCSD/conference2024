import React from "react";

class SocialIcons extends React.Component {
    render() {
        return (
            <a className="fb-ic" href={this.props.item.url}>
                <i className={this.props.item.icon}> </i>
            </a>
        );
    }
}

export default SocialIcons;