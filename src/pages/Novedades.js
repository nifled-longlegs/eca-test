import React from 'react';
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'reactstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/lib/fa'

import PageHeader from '../components/PageHeader/PageHeader';


class NovedadesPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const first = posts.shift() // get first post, modifies posts directly

    return (
      <Container>
        <PageHeader text="Novedades" />

        <hr />

        <Row>
          <Col xs={12} md={9}>
            <div className="blog">
              <div className="blog-card">
                <img className="img-fluid" src={first.node.frontmatter.thumbnail} alt="blog-img"/>
                <div className="blog-card__content">
                  <p className="blog-card__title"><a href="/">{first.node.frontmatter.title}</a></p>
                  <div className="blog-card__extra">
                    {first.node.frontmatter.tags.map((tag, index) => (
                      <p key={index} className="blog-card__tag">{tag}</p>
                    ))}
                    <p className="blog-card__date">{first.node.frontmatter.date}</p>
                  </div>
                  <p className="blog-card__desc">{first.node.excerpt}</p>
                </div>
              </div>
            </div>

            <Row>
              {posts.map(({ node: post }) => (
                <Col xs={12} md={4} key={post.id} className="d-flex align-items-stretch">
                  <div className="blog alt">
                    <div className="blog-card">
                      <img className="img-fluid" src={post.frontmatter.thumbnail} alt="blog-img"/>
                      <div className="blog-card__content">
                        <p className="blog-card__title"><a href="/">{post.frontmatter.title}</a></p>
                        <div className="blog-card__extra">
                          {first.node.frontmatter.tags.map((tag, index) => (
                            <p key={index} className="blog-card__tag">{tag}</p>
                          ))}
                          <p className="blog-card__date">{post.frontmatter.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col xs={12} md={3}>
            <div className="blog sidebar">
              <div className="blog-card">
                <p className="sidebar-title">Síguenos en:</p>
                
                <Row>
                  <Col xs={6}>
                    <a rel="noopener noreferrer" className="blog-social facebook" href="https://www.facebook.com/Comercial-ECA-228237771035198/?rf=1198475553503426" target="_blank" style={{ color: "white" }}>
                      <FaFacebook size={32} />
                    </a>
                  </Col>
                  <Col xs={6}>
                    <a rel="noopener noreferrer" className="blog-social instagram" href="https://www.facebook.com/Comercial-ECA-228237771035198/?rf=1198475553503426" target="_blank" style={{ color: "white" }}>
                      <FaInstagram size={32} />
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <a rel="noopener noreferrer" className="blog-social youtube" href="https://www.facebook.com/Comercial-ECA-228237771035198/?rf=1198475553503426" target="_blank" style={{ color: "white" }}>
                      <FaYoutube size={32} />
                    </a>
                  </Col>
                  <Col xs={6}>
                    <a rel="noopener noreferrer" className="blog-social whatsapp" href="https://www.facebook.com/Comercial-ECA-228237771035198/?rf=1198475553503426" target="_blank" style={{ color: "white" }}>
                      <FaWhatsapp size={32} />
                    </a>
                  </Col>
                </Row>

              </div>
            </div>
          </Col>
        </Row>

      </Container>
    )
  }
}

export default NovedadesPage;

NovedadesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query NovedadesPage {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            tags
            thumbnail
          }
        }
      }
    }
  }
`
