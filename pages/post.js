import { useRouter } from 'next/router';
import Layout from '../comps/Mainlayout';

const Content = () => {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.id}</h1>
            <p>This is the blog post content.</p>
        </Layout>
    );
};

// const Page = () => {
//     return (
//         <Layout>
//             <Content />
//         </Layout>
//     );
// };

export default Content;