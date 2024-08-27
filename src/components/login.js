import React,{useState} from "react";

function LoginComponent() {
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = data;

  const change = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = e => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <center>
    <div >
      
        <form onSubmit={submit}>
          <p>userName</p>
          <input type="text" name='username' value={username} onChange={change} /><br />
          <input type="password" name="password" value={password} onChange={change} /><br />
          <input type='Submit' />
        </form>
      
    </div>
    </center>
    
  );
}

export default LoginComponent;