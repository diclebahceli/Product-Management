import React from 'react';
import PostCard from './PostCard';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Navbar, Container, Nav, Form, Row, Col, Button} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';


function HomePage({token}) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [products, setProducts] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    getProducts();
  }, [])


  async function getProducts() {
    try{
      const {data, error} = await supabase
      .from('products')
      .select('*')
      .limit(10) 
      if(error) throw error
      if(data!=null){
        setProducts(data)
      }
    }catch(error){
      alert(error)
    }
  }

  console.log(name)
  console.log(description) 
  function handleLogout() {
    sessionStorage.removeItem('token')
    navigate('/')
  }

  async function createProduct() {

    try{
      const {data, error} = await supabase
      .from('products')
      .insert({
        name: name,
        description:description
    })
    
      if(error) throw error
      window.location.reload()
    }catch(error){
      alert(error)
    }
  }
  
  return (
    <div>
      <h2>Welcome back, {token.user.user_metadata.fullName}</h2>
      <Navbar>
        <Container>
          <Navbar.Brand >Store Products</Navbar.Brand>
          <Nav>
            <Nav.Item>Created by Dicle</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
         <Col xs = {12} md={8}>
         <h3>Create a Product For Supabase Database</h3>
          <Form.Label>product.name</Form.Label>
          <Form.Control 
          type="text" 
          id="name" 
          onChange={(e) => setName(e.target.value)}/>
          
          <Form.Label>product.description</Form.Label>
          <Form.Control 
          type="text" 
          id="description" 
          onChange={(e) => setDescription(e.target.value)}/>
          <br></br>
          <Button onClick={() => createProduct()}>Create Product in Supabase DB</Button>
          </Col>
        </Row>
        <hr></hr>
        <h3>Current Database Items</h3>
        <Row xs={1} lg={3} className='g-4'>
          {products.map((product) => (
            <Col>
            <ProductCard product={product}></ProductCard>
            </Col>
            ))}
          
        </Row>
      </Container>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
