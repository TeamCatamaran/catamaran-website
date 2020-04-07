import React from 'react'
import { Link } from 'gatsby'

const JournalTile = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="c-journalTile container" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                <div className="c-journalTile__details">
                    <label>Journal</label>
                    <label>{ this.props.category }</label>
                </div>
                <h1 className="c-journalTile__title">{ this.props.title }</h1>
                <div className="c-journalTile__actions">
                    <Link
                        to  = { this.props.postLink }
                        rel = { this.props.postRel }
                    >Read ></Link>
                    <Link
                        to  = { this.props.allLink }
                        rel = { this.props.allRel }
                    >See All ></Link>
                </div>
                
            </div>
        )
    }
}

export default JournalTile
