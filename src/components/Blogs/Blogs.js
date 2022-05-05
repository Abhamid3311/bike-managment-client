import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Blogs</h2>
            <div>
                <h3>Difference between javascript and node.js?</h3>
                <p>JavaScript is a programming language. It is running in all web browser with a proper browser engine like V8, Spider monkey, javascript core etc. it is very easy to write and it follows standard code.JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display </p>
                <p>On otherside Node.js is a Run time. it can not run many Browser or Engene. specifically it runs at only at google Chorome. Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries. Node.js also holds a lot of relative libraries, which we normally use in javascript for general purpose programming language.</p>
            </div>

            <div>
                <h3>When should I use nodejs and when should I use mongodb?</h3>
                <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind. Node JS is best suited for real-time collaborative drawing or editing applications like Google Docs.</p>
                <p>MongoDB is a NoSQL. here we can stored non stuctured data. it has many suitable privilage what gives lot of happiness all developers.
                    the reason of using Mongo is Document databases are highly flexible, allowing variations in the structure of documents and storing documents that are partially complete. One document can have others embedded in it. Fields in a document play the role of columns in a SQL database, and like columns, they can be indexed to increase search performance.
                </p>
            </div>

            <div>
                <h3>Differences between sql and nosql databases?</h3>
                <p> SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                <p>Great support is available for all SQL database from their vendors. Also a lot of independent consultations are there who can help you with SQL database for a very large scale deployments but for some NoSQL database you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments. </p>
            </div>
        </div>
    );
};

export default Blogs;