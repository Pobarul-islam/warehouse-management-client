import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog mx-auto'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4>Difference between javascript and node js?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>JavaScript is a client-side scripting language or browser spotting. Client-side scripting language means that the browser will run this script. Unlike the client side, the server side, server side language, all the code is executed / run through the web server.</p>

                        <p>Node.js is an open source, cross-platform, JavaScript run-time environment compiled into a terminal outside of the browser, primarily used for server-side scripting and command line tools.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4>When should you use nodejs and when should you use mongodb ?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>Node.js is fundamentally utilized for non-obstructing, occasion driven servers, because of its single-strung nature. It's utilized for customary sites and back-end API benefits however was planned with ongoing, push-based models at the top of the priority list.</p>

                        <p>Node.js is fundamentally utilized for non-obstructing, occasion-driven servers, because of its single-strung nature. It's utilized for customary sites and back-end API benefits however was planned with ongoing, push-based models at the top of the priority list.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4>Differences between SQL and NOSQL database ?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>A SQL Database follows a table like design which can have an
                            limitless number of lines and each datum present inside the data set
                            is appropriately organized with Predefined Schemas, it is essentially utilized
                            to control Relational Databases Management Systems.</p>
                        
                        <p>A SQL Database follows a table like design which can have an
                            limitless number of lines and each datum present inside the data set
                            is appropriately organized with Predefined Schemas, it is essentially utilized
                            to control Relational Databases Management Systems.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4>What is the purpose of jwt and how does it work ?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>JWT, or JSON Web Token, is an open standard used to divide security data among two gatherings — a client and a server. Each JWT contains encoded JSON objects, including a bunch of cases. JWTs are marked utilizing a cryptographic calculation to guarantee that the cases can't be modified after the token is given.</p>

                        <p>A JWT is a Base64URL encoded string, split into three areas, delimited by periods. <br /> <br />

                            Area one is the header. This segment contains JWT metadata; commonly data about the kind of token and the calculation used to sign it. It is encoded JSON.
                            Area two is the payload. This is the substance of the token and is additionally encoded JSON.
                            Area three is the mark. This is the SHA256 (or some other HMAC) hash of the encoded header, encoded payload, and confidential. This piece of the JWT is utilized to check the respectability of the message.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;