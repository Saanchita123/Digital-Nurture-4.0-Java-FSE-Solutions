import React,{useState,useEffect} from "react";

function GetUser(){
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
    useEffect(()=>
    {
        const fetchUser = async ()=>{
            try{
                
                    const response=await fetch('https://api.randomuser.me/');
                    if(!response.ok)
                    {
                        throw new Error('failed to fetch user data ');
                    }
                        const data = await response.json();
                    setUser(data.results[0]);
                    setLoading(false);
                }
                catch(err)
                {
                  setError(err.message);
        setLoading(false);
                }
            };
            fetchUser();
        },[]);
         if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data found</div>;

  return (
    <div className="user-container">
      <h2>User Details</h2>
      <div className="user-card">
        <img 
          src={user.picture.large} 
          alt={`${user.name.first} ${user.name.last}`}
        />
        <div className="user-info">
          <p><strong>Title:</strong> {user.name.title}</p>
          <p><strong>First Name:</strong> {user.name.first}</p>
          <p><strong>Last Name:</strong> {user.name.last}</p>
        </div>
      </div>
    </div>
  );
}

export default GetUser;
            