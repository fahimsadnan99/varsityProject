import React from 'react'
import Layout from '../Layout/Layout';
import Navbar from '../Navbar/Navbar';

const Gallery = () => {
    return (
      <Layout title="Gallery Page">
        <Navbar></Navbar>
        <div className="container">
          <h1>This is Gallery Page</h1>
        </div>
      </Layout>
    );
}

export default Gallery
