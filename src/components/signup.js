import React,{useState} from "react";
import axios from 'axios';

function Signup() {
  const [data, setData] = useState({
    username: '',
    email:'',
    password: '',
    confirmpassword: ''
  });

  const { username,email, password,confirmpassword } = data;

  const change = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = e => {
    e.preventDefault();
    axios.post('https://sravan-signup-default-rtdb.firebaseio.com/register.json',data).then(()=>alert("Data submitted sucessfully"));
    
    
  };

  return (
    
    <div >
      
        <form onSubmit={submit}>
          <p>userName</p>
          <input type="text" name='username' value={username} onChange={change} /><br />
          <input type="email" name="email" value={email} onChange={change} /><br />
          <input type="password" name="password" value={password} onChange={change} /><br />
          <input type="password" name="confirmpassword" value={confirmpassword} onChange={change} /><br />
          {password!==confirmpassword?<p style={{"color":'red'}}>passwords are not matching</p>:null}
          <input type='Submit' />
        </form>
      
    </div>
    
  );
}

export default Signup;