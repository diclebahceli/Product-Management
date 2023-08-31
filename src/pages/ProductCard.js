import {Card, Button, Form} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { supabase } from '../client';   

async function generateOGImage(productName) {
  try {
    console.log('Before Fetch');
    const response = await fetch(`/functions/v1/og-image/${productName}`, {
      mode: 'cors',
      headers:{ 'Content-Type': 'application/json'},
    });
    console.log(response.body);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response + "BBBBBBBBBBBBBBBBB");
    return response.url;
  } catch (error) {
    console.error('Error generating OG image:', error.message);
    return null;
  }
}


function ProductCard(props){

    const product = props.product
    const [editing, setEditing] = useState(false)
    const [name, setName] = useState(product.name)
    const [description, setDescription] = useState(product.description) 
    const [ogImageURL, setOGImageURL] = useState('');
    
    
    useEffect(() => {
      generateOGImage(product.name).then((imageURL) => {
        if (imageURL) {
          setOGImageURL(imageURL);
          console.log(imageURL+"AAAAAAAAAAAAAAAAAAAAA")
        } else {
          setOGImageURL('/functions/v1/og-image'); }
      });
    }, [product.name]);

    console.log(ogImageURL+"AAAAAAAAAAAAAAAAAAAAA")
    async function updateProduct() {
        try{
            const {data, error} = await supabase
            .from('products')
            .update({
              name: name,
              description:description
          })
          .eq('id', product.id)
            if(error) throw error
            window.location.reload()
          }catch(error){
            alert(error)
          }
    }

    async function deleteProduct() {
        try{
            const {data, error} = await supabase
            .from('products')
            .delete()
          .eq('id', product.id)
            if(error) throw error
            window.location.reload()
          }catch(error){
            alert(error)
          }
    }

    return(
        <Card style={{width:"18rem"}}>
          <div >
              {<img  style={{width:"100px"}} src={ogImageURL} alt= {product.name}/>}
              </div>
            <Card.Body>
            
                {editing==false?
                <>
                <Card.Title> {product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant='danger' onClick={() => deleteProduct()}>Delete</Button>
                <Button variant='secondary' onClick={() => setEditing(true)}>Edit</Button>
                </>
                :<>
                <h4>Editing the Product</h4>
                <Button size="sm" onClick={() => setEditing(false)}>Go Back</Button>
                <br></br>
                <Form.Label>{product.name}</Form.Label>
          <Form.Control 
          type="text" 
          id="name" 
          defaultChecked={product.name}
          onChange={(e) => setName(e.target.value)}/>
          
          <Form.Label>Product Description</Form.Label>
          <Form.Control 
          type="text" 
          id="description" 
          defaultValue={product.description}
          onChange={(e) => setDescription(e.target.value)}/>
          <br></br>
          <Button onClick={()=> updateProduct()}>Update Product in Supabase DB</Button>
                </>}
            </Card.Body>
        </Card>
    )
}

export default ProductCard;