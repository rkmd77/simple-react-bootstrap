import React from 'react';

document.onclick = function(evt){
};

const NavBarBrand = props => React.cloneElement(props.children, { className: 'navbar-brand' });

const NavBarToggle = props =>
    <button { ...props } type="button" className="navbar-toggle collapsed">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
    </button>;

const cloneHeaderItem = (item, i) => {
    let key = `item${i}}`;
    if (item.type === NavBarToggle){
        key = 'toggle'
    } else if (item.type === NavBarBrand){
        key = 'header-toggle'
    }
    return React.cloneElement(item, { key });
};

const NavBarHeader = props =>
    <div className="navbar-header">
        { props.children.map(cloneHeaderItem) }
    </div>;

const NavBarItem = props =>
    <li { ...props }>{props.children}</li>;

const Nav = props =>
    <ul { ...props } className="nav navbar-nav">
        {props.children}
    </ul>;

class NavBar extends React.Component{
    constructor(){
        super();
        this.state = { collapsed: true, heightExpanded: false, collapseHeight: null };
    }
    toggleMobileCollapse(evt){
        if (this._pendingAnimationClear){
            clearTimeout(this._pendingAnimationClear);
            this._pendingAnimationClear = null;
        }
        if (this.state.expanded || this.state.expanding){
            this.setState({ collapsing: true, collapseHeight: null, expanding: false, expanded: false });
            this._pendingAnimationClear = setTimeout(() => {
                this.setState({ collapsing: false, collapseHeight: null });
                this._cachedHeight = null;
            }, 300);
        } else {

            if (!this._cachedHeight) {
                let currentNode = evt.target,
                    collapseContentToToggle;

                while (currentNode = currentNode.parentNode){
                    console.log('TICK');
                    if (currentNode.tagName === 'DIV'){
                        collapseContentToToggle = currentNode.nextSibling;
                        break;
                    }
                }

                collapseContentToToggle.classList.add('in');
                let offsetHeight = collapseContentToToggle.offsetHeight;
                collapseContentToToggle.classList.remove('in');

                this._cachedHeight = offsetHeight;
            }

            this.setState({ collapsing: true, expanding: true });
            setTimeout(() => this.setState({ collapseHeight: this._cachedHeight }), 2);

            this._pendingAnimationClear = setTimeout(() => this.setState({ collapsing: false, expanded: true, expanding: false }), 300);
        }
    }
    render(){
        let header = this.props.children.find(c => c.type === NavBarHeader),
            toggle = header ? header.props.children.find(c => c.type === NavBarToggle) : null,
            toggleIndex = toggle ? header.props.children.indexOf(toggle) : -1,
            navSubItems = this.props.children.filter(filterValidNavSubItems).map((subItem, i) => React.cloneElement(subItem, { key: `item${i}` }));

        if (toggleIndex >= 0){
            header.props.children[toggleIndex] = React.cloneElement(toggle, { onClick: this.toggleMobileCollapse.bind(this) });
        }

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    { header || null }
                    <div className={(this.state.collapsing ? ' collapsing ' : ' collapse ') + ' navbar-collapse ' + (this.state.expanded ? ' in ' : '')} style={{ height: this.state.collapseHeight || null }}>
                        { navSubItems }
                    </div>
                </div>
            </nav>
        );
    }
}

NavBar.Nav = Nav;
NavBar.Item = NavBarItem;
NavBar.Header = NavBarHeader;
NavBar.Brand = NavBarBrand;
NavBar.Toggle = NavBarToggle;

function filterValidNavSubItems(item){
    return item.type !== NavBarHeader;
}

export default NavBar;
