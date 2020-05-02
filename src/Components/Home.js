import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      this.setState({ posts: res.data.splice(0, 10) }) //res.data contains response data and splice is to get only 10 entries
    })
  }
  render() {
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className='post card' key={post.id}>
            <img src={Pokeball} alt='A pokeball' />
            <div className='bold card-content'>
              <span className='card-title'>
                <Link className='bold-heading red-text' to={`/${post.id}`}>
                  {post.title}
                </Link>
              </span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className='center'>No posts yet</div>
    )
    return (
      <div className='container home'>
        <h4 className='center'>Posts</h4>
        {postList}
      </div>
    )
  }
}

export default Home
