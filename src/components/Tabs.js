import React from 'react'
import { Link } from 'gatsby'

const Tabs = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const totalTabs = ['zero', 'one', 'two', 'three', 'four', 'five'];

        return (
            <div className={`c-tabset -${totalTabs[this.props.pages.length]}`}>
                <div className="container">
                    <div className="c-tabset__wrapper">
                        {
                            this.props.pages.map((p, key) => {
                                let className = "c-tabset__tab";
                                if (this.props.activeTab === p.name) {
                                    className += " -active";
                                }
                                if (p.url == null) {
                                    return (null);
                                }
                                return (
                                    <Link key={"tab-" + key} to={p.url} rel={p.rel} className={className}>{p.label}</Link>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabs
