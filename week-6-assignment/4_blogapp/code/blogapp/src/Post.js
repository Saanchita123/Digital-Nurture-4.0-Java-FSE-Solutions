
//object per post 
import React from "react";
class Post {
  constructor(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
export default Post;

export class Posts extends React.Component {
  constructor(porps) {
    super(porps);
    this.state={
      posts:[],
    };
  }
  loadPosts()
  {
    //code
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=> response.json())
    .then((data)=>{
      const postsArray=data.map(
        (item)=> new Post(item.id,item.title,item.body)
      );
      this.setState({posts:postsArray});
    })
    .catch((error)=>{
      throw error;
    });
  }
  componentDidMount()
  {
    //code
    this.loadPosts();
  }
  render()
  {
    //code
    return(
      <div>
        <h2>Blog posts</h2>
        {this.state.posts.map((post)=>(
          <div key={post.id} >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ))}
      </div>
    )
  }
  componentDidCatch(error,info)
  {
    //code
    alert("error here :"+error.message);
  }
}
