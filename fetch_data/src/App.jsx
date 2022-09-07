import React,{useState,useEffect} from 'react'


const App = () => {
  const [userData,setuserData]=useState({})
  const url="https://jsonplaceholder.typicode.com/users/1"
  const getData =async ()=>{
     const response=await fetch(url);
     const jsondata = await response.json();
     setuserData(jsondata)
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <React.Fragment>
    <div style={{background:"red"}}>hello</div>
    <div className="App">
    <h2>User Data</h2>

    <p>
      <strong>Name:</strong> {userData.name}
    </p>
    <p>
      <strong>Website:</strong> {userData.website}
    </p>
    <p>
      <strong>Email:</strong> {userData.email}
    </p>
    <p>
      <strong>Phone:</strong> {userData.phone}
    </p>
  </div>
  </React.Fragment>
  );
}

export default App