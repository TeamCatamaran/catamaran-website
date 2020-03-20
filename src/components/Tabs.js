import React from 'react'
import { Link } from 'gatsby'

const Tabs = ({
    activeTab,
    pages,
}) => {
    const totalTabs = ['zero', 'one', 'two', 'three', 'four', 'five'];

    return (
        <div className={`c-tabset -${totalTabs[pages.length]}`}>
            <div className="container">
                <div className="c-tabset__wrapper">
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
                                <Link key={"tab-" + key} to={p.url} rel={p.rel} className={className}>{p.label}</Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Tabs
