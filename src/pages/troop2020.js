import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';

const SecondPage = ({ data }) => (
    <div className='mainbody'>
        <SEO title='Meet the Team' />
        <Header />
        <div className='member-mainbody'>
        <div className="member-heading">
                        <h1 class="underline-small">Meet Our Team</h1>
                </div>
            {/* <h3 className='member-heading'>Meet our Team</h3> */}
            <div className='scoordinator'>
                <div className='coordinator'>
                    <a href='https://www.researchgate.net/profile/Syam_Sankar3'>
                        <Img
                            fluid={data.imgStaffCo.childImageSharp.fluid}
                            className='profile-pic'
                        />
                        {/* <div className='profile-pic'></div> */}
                        <h5>Syam Sankar</h5>
                        <h6>Staff Co-ordinator</h6>
                    </a>
                </div>
                <br />
            </div>
            <div
                className='site-content-members'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <div className='showmembers'>
                    {data.allMarkdownRemark.edges.map(member => (
                        <div key={member.node.id} className='member-card'>
                            <a href={member.node.frontmatter.url}>
                                <img
                                    src={member.node.frontmatter.avathar}
                                    alt={`Avathar of ${member.node.frontmatter.name} from Gitlab/Github`}
                                />
                                <h5>{member.node.frontmatter.name}</h5>
                                <h6>{member.node.frontmatter.designation}</h6>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export const MembersQuery = graphql`
    query MemberIndexQuery2020 {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/members/2020/.*md$/" } }
            sort: { fields: [frontmatter___name], order: ASC }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        name
                        avathar
                        designation
                        url
                        dept
                        email
                        phone
                        skills
                    }
                }
            }
        }
        imgStaffCo: file(relativePath: { eq: "syamsankar.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;

export default SecondPage;
