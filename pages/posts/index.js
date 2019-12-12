import { useRouter } from 'next/router';
import Layout from '../../comps/Mainlayout';
import React, {Component} from 'react';

export default class Post extends Component {
  static async getInitialProps({query}) {
    return query
  }
  constructor(props) {
    super(props)
  }
  render () {
    // console.log(this.props)
    return (
      <Layout>
        <h1>Post: {this.props.id} </h1>
        <p>This is the blog post content. Hello: {this.props.id}</p>
      </Layout>
    );  
  }
}

// const Post = () => {
//   const router = useRouter()
//   const { query } = router.query
//   return (
//     <Layout>
//       <h1>Post: {query}</h1>
//       <p>This is the blog post content. Hello: {query}</p>
//     </Layout>
//   );
// }

// export default Post