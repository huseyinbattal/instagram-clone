import React from 'react'
import Post from './Post'

const Posts = () => {
  const posts = [
    {
      id: "1",
      username: "codewithbattal",
      userImg: "https://media.licdn.com/dms/image/C4D03AQFcRdc7CNsYfw/profile-displayphoto-shrink_800_800/0/1654269434464?e=2147483647&v=beta&t=oVKynO5g8Jkqdwg5_Ug6GUI2FEvUL7urEROUeVFTcjg",
      img: "https://images.unsplash.com/photo-1673725437510-fe7bc808c306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      caption:"Nice picture"
    },
    {
      id: "2",
      username: "huseyinbattal",
      userImg: "https://media.licdn.com/dms/image/C4D03AQFcRdc7CNsYfw/profile-displayphoto-shrink_800_800/0/1654269434464?e=2147483647&v=beta&t=oVKynO5g8Jkqdwg5_Ug6GUI2FEvUL7urEROUeVFTcjg",
      img: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      caption:"New picture from my home"
    }
  ]
  return (
      <div>
      {posts.map(post => (
        <Post
        key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
          ))}
    </div>
  )
}

export default Posts