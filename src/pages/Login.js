import {useState} from 'react';
import {supabase} from '../client';
import {Link, useNavigate} from 'react-router-dom';

export default function Login({setToken}) {

  let navigate = useNavigate()

  const [formData,setFormData] = useState({
    email:'',password:''
  })

  function handleChange(event) {
    setFormData((prevFromData)=>{
      return {...prevFromData,
        [event.target.name]:event.target.value}
    })
  }

  async function handleSubmit(e){
    e.preventDefault() 
   try{
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    })
    console.log(data+"DATAA")
      if (error) throw error
      alert ('Logged in!')
      setToken(data)
      navigate('/homepage')
   }catch(error){
      alert(error)
   }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      
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
          Log in
        </button>
      </form>Dont have an account? <Link to='/'>Signup</Link>
     
    </div>
  );
}

