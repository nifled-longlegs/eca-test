import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './all.sass'

// Bootstrap's CSS
import '../assets/css/bootstrap.min.css'

// Animate.css
import '../assets/css/animate.min.css'

// Slick
import '../assets/css/slick.min.css'
import '../assets/css/slick-theme.min.css'

// Rodal
import 'rodal/lib/rodal.css';

// Global CSS (normalize)
import '../globalStyles'

const TemplateWrapper = ({ children }) => (
  <div>
    <div>
    	<Helmet title="Comercial ECA" />
	    <Header />

	    {children()}

	    <Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
