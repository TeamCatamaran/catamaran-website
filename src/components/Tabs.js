import React from 'react'
import { Link } from 'gatsby'

const Tabs = class extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { activeTab, pages } = this.props;
        const key = pages.findIndex(p => p.name === activeTab);
        if (key <= 0) {
            return;
        }
        const tabset = document.getElementById('tabset');
        const tab = document.getElementById(`tab-${key}`);
        if (tabset == null || tab == null) {
            return;
        }
        tabset.scrollTo(tab.offsetLeft + (tab.clientWidth / 2) - (window.innerWidth / 2), 0)
    }

    render() {
        const { activeTab, pages } = this.props;
        const totalTabs = ['zero', 'one', 'two', 'three', 'four', 'five'];

        return (
            <div className={`c-tabset -${totalTabs[pages.length]}`}>
                <div className="container">
                    <div className="c-tabset__wrapper" id="tabset">
                        {
                            pages.map((p, key) => {
                                let className = "c-tabset__tab";
                                if (activeTab === p.name) {
                                    className += " -active";
                                }
                                if (p.url == null) {
                                    return (null);
                                }
                                return (
                                    <Link key={`tab-${key}`} to={p.url} rel={p.rel} className={className} id={`tab-${key}`}>{p.label}</Link>
                                );
                            })
                        }
                        <div className="c-tabset__tab -spacer">&nbsp;</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabs
