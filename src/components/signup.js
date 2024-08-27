import React,{useState} from "react";


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
    console.log(data);
    
    
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