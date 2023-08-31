import {useState} from 'react';
import {supabase} from '../client';
import {Link} from 'react-router-dom';

export default function Signup() {

  const [formData,setFormData] = useState({
    fullName:'',email:'',password:''
  })

  console.log(formData)
  function handleChange(event) {
    setFormData((prevFromData)=>{
      return {...prevFromData,
        [event.target.name]:event.target.value}
    })
  }

  async function handleSubmit(e){
    e.preventDefault() 
   try{
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options:{
        data:{
        
          fullName:formData.fullName
        }      }
    })
    
      alert ('Check your email for verification link')
   }catch(error){
      alert(error)
   }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        placeholder='Fullname'
        name='fullName'
        onChange={handleChange}></input>
        <input
        placeholder='Email'
        name='email'
        onChange={handleChange}></input>
        <input
        placeholder='Password'
        name='password'
        type='password'
        onChange={handleChange}></input>
        <button type='submit'>
          Submit
        </button>
      </form>
      Already have an account? <Link to='/login'>Login</Link>
    </div>
  );
}

