import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';

import '../styles/partials/layouts/_supporters.scss';
import Img from 'gatsby-image';

export default function Template({
    data,
}) {
    return (
        <div className='mainbody'>
            <SEO title='Supporters' />
            <Header />
            <div className='site-content'>

                <div className="post-content">
                    <div className="blog-heading">
                        <h1 class="underline-small">Our Supporters</h1>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="square-holder">
                                <img alt="GNOME" title="GNOME: BigBlueButton instance sponsor" src="https://i.ibb.co/nrpJgq0/gnome-logos.png" width="300"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="square-holder">
                                <img alt="GitLab" title="GitLab: Ultimate SaaS Plan Sponsor" src="https://i.ibb.co/0nQbvTN/gitlab-logo-gray-rgb.png" width="300"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="square-holder">
                                <img alt="FSCI" title="FSCI: Community partner" src="https://i.ibb.co/h76VXWH/fsci.png" width="200" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
};



// post-content and blog-heading used as is in _blog.scss
