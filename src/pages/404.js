import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'




const NotFoundPage = () => (
  <Layout
    bodyClass="-purple -interior"
    footerHasShapes={true}
  >

    < Header collageType='404' height="450" />
    <div className="c-intro container" >
      <div className="c-notFound container">
        <p className="c-notFound__textLand">404</p>
        <label className="c-notFound__textNoFind">
          We can't find what you're looking for.
        </label>
      </div>
    </div>

  </Layout>
)

export default NotFoundPage
