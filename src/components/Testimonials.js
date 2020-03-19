import React from 'react'

import FluidImage from './FluidImage'

const Testimonials = class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedIndex: 0
        };
    }

    render() {
        if (this.props.items == null || this.props.items.length === 0) {
            return (null);
        }

        const totalItems = this.props.items.length;

        const companies = [];
        let currentCompany = this.state.selectedIndex;
        for (let i = 0; i < totalItems; i++) {
            const company = this.props.items[currentCompany];
            company.isSelected = currentCompany === this.state.selectedIndex;
            companies.push(company);
            currentCompany++;
            if (currentCompany >= totalItems) {
                currentCompany = 0;
            }
        }
        companies.push(companies.shift());

        return (
            <div className="c-testimonials -quotes container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                <div className="c-testimonials__companies">
                    <div className="c-testimonials__count">
                        <span className="c-testimonials__count__current">{(this.state.selectedIndex + 1).toString().padStart(2, '0')}</span> / {totalItems.toString().padStart(2, '0')}
                    </div>
                    <div className="c-testimonials__logos">
                        {
                            companies.map((c, key) => {
                                let className = "c-testimonials__logo";
                                let image = c.logoDark;
                                if (c.isSelected) {
                                    className += " -selected";
                                    image = c.logo;
                                }
                                return (
                                    <div
                                        className={className}
                                        key={"logo-" + key}>
                                        <FluidImage
                                            alt={c.name}
                                            className="c-testimonials__logo__image"
                                            image={image} />
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="c-testimonials__images">
                        {
                            companies.map((c, key) => {
                                let className = "c-testimonials__image";
                                let image
                                if (c.isSelected) {
                                    className += " -selected";
                                }
                                if (c.image == null) {
                                    return (null);
                                }
                                return (
                                    <FluidImage
                                        alt={c.image.alt || c.name}
                                        className={className}
                                        key={"image-" + key}
                                        image={c.image.src} />
                                );
                            })
                        }
                    </div>
                </div>
                <div className="c-testimonials__content">
                    <div className="c-testimonials__quotes">
                        {
                            companies.map((c, key) => {
                                let className = "c-testimonials__quote";
                                if (c.isSelected) {
                                    className += " -selected";
                                }
                                return (
                                    <div
                                        className={className}
                                        key={"quote-" + key}>
                                        <h4 className="c-testimonials__quote__name">{c.name}</h4>
                                        <label className="c-testimonials__quote__title">{c.title}</label>
                                        <p className="c-testimonials__quote__body">{c.quote}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="c-testimonials__controls">
                        <button onClick={this.prevSlide.bind(this)} className="c-testimonials__controls__button -prev">&#60;</button>
                        <button onClick={this.nextSlide.bind(this)} className="c-testimonials__controls__button -next">&#62;</button>
                        <div className="c-testimonials__controls__zebra">
                            <svg className="c-testimonials__controls__zebra__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 826 84"><g><path d="M819.63,84H826V81.91l-1.75.6C822.71,83,821.17,83.5,819.63,84Z" /><path d="M798.63,84h21c1.54-.5,3.08-1,4.62-1.49l1.75-.6V75.69l-3.6,1.14C814.53,79.34,806.59,81.69,798.63,84Z" /><path d="M689,78.65q-5.5,2.5-10.87,5.35h16.91c41.44-18.88,87.65-26.7,130.41-45.5l.53-.24V31.92c-1,.4-1.9.81-2.86,1.19C780.12,51.48,732.58,58.25,689,78.65Z" /><path d="M694.38,40.22c22.16-7.63,45.09-13.41,67.6-21C777.84,13.83,793.67,7.77,808.65,0H794.16a329.05,329.05,0,0,1-34.29,12.73c-22.39,7-45.25,13-67.84,20.49s-44.83,16.92-65,30.26c-4.82,3.63-9.88,7-14.49,10.84-3.65,3.23-7.38,6.4-11,9.68H614a164.42,164.42,0,0,1,17.71-13.68C650.68,57.05,672.26,47.8,694.38,40.22Z" /><path d="M632.29,20.69C650.71,12.09,670.28,6,690,0H664.28c-11.93,3.85-23.77,8.12-35.38,13.16-21.83,9.81-42.82,22.63-60,39.77A185,185,0,0,0,543.1,84h11.3a172.91,172.91,0,0,1,20.78-24.67C591.46,43,611.08,30.16,632.29,20.69Z" /><path d="M522.91,52.43A184.9,184.9,0,0,1,572.2,4.73Q576,2.27,579.85,0H563c-3.54,2.48-6.94,5.18-10.55,7.58-4.85,3.62-9.12,8-13.71,11.9a167.27,167.27,0,0,0-23.87,27.3A210.67,210.67,0,0,0,493.79,84h11c.26-.56.51-1.13.77-1.69A224.37,224.37,0,0,1,522.91,52.43Z" /><path d="M508.74,0H494.81C491,4.37,487.4,8.92,483.94,13.55c-3.42,5-6.95,10-9.88,15.24-3.2,5.15-6,10.49-8.68,15.9A324.68,324.68,0,0,0,449.56,84H461a310.26,310.26,0,0,1,13.89-34.7A182,182,0,0,1,508.74,0Z" /><path d="M452.94,0H440.23c-8.45,14.8-15,30.59-20.62,46.44-4.34,12.44-8.15,25-11.89,37.56h12c3.32-11.41,6.7-22.73,10.61-33.83C436.44,32.74,443.52,15.63,452.94,0Z" /><path d="M405.73,0H393.2c-7.05,17.55-12.47,35.57-17.75,53.38C372.4,63.66,369.38,73.9,366.11,84h12.75c2.82-9.09,5.45-18.21,8.07-27.26C392.52,37.42,398.22,18.26,405.73,0Z" /><path d="M363.15,0H350c-7.54,23.9-13.79,48-22.33,70.78q-2.49,6.69-5.29,13.22h14.16c1.14-2.9,2.25-5.8,3.3-8.72C348.9,50.29,355.35,24.7,363.15,0Z" /><path d="M322.16,0H308.51c-5.75,19.24-11.73,38.22-19.73,56.17A211.82,211.82,0,0,1,273.91,84H290a231.61,231.61,0,0,0,11.11-22.38C310,41.47,316.19,20.61,322.16,0Z" /><path d="M281.12,0H266.28c-5.21,14.88-11.17,29.3-18.81,42.92A179.68,179.68,0,0,1,216.37,84h20.35A200.17,200.17,0,0,0,260,49.87C268.88,33.75,275.48,17,281.12,0Z" /><path d="M214,41.2A222.2,222.2,0,0,0,237.6,0H221.27a194.32,194.32,0,0,1-19.55,32.12,174.65,174.65,0,0,1-44.25,41.57A192.52,192.52,0,0,1,139.77,84h31A191.44,191.44,0,0,0,214,41.2Z" /><path d="M140.53,51.63a189.82,189.82,0,0,0,40.26-39.78q4.4-5.77,8.33-11.85h-19c-.59.79-1.16,1.59-1.76,2.38-21.09,27.9-50.92,47.55-83.75,60.12C62.59,71.12,39.3,77.18,15.78,84H77.35q6.9-2.5,13.77-5.3C108.36,71.61,125.22,62.81,140.53,51.63Z" /><path d="M132.51,0h-25A194.41,194.41,0,0,1,67.22,24.45C46,34.26,23.22,40.84,0,47.44V67.29c24.88-7.54,50.41-15,74.76-26.8A204.59,204.59,0,0,0,132.51,0Z" /><path d="M60.49,0H17.16C11.52,2.12,5.79,4.1,0,6V26.07C19.82,19.55,39.67,11.92,58.31,1.26,59,.85,59.76.42,60.49,0Z" /></g></svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    resetSelected() {
        this.setState({
            selectedIndex: 0
        });
    }

    prevSlide() {
        const total = this.props.items.length;
        if (this.state.selectedIndex === total - 1) {
            this.setState({
                selectedIndex: 0,
            });
        } else {
            const next = this.state.selectedIndex + 1;
            this.setState({
                selectedIndex: next,
            });
        }

    }

    nextSlide() {
        if (this.state.selectedIndex === 0) {
            this.setState({
                selectedIndex: this.props.items.length - 1,
            });
        } else {
            const next = this.state.selectedIndex - 1;
            this.setState({
                selectedIndex: next,
            });
        }
    }
}

export default Testimonials
