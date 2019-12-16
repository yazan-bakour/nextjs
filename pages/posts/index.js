import { useRouter } from 'next/router';
import Layout from '../../comps/Mainlayout';
import React, {Component} from 'react';
import Markdown from 'react-markdown';


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
        
        
        <div className="markdown">
        <Markdown
          source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.
      `}
        />
      <h1>Post: {this.props.id}</h1>
      <p>This is the blog post content. Hello: {this.props.id}</p>
      </div>
      <style jsx global>{`
        .markdown p {
          color: #666;
        }

        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
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