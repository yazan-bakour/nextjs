import Link from 'next/link';

const linkStyle = {marginRight: 15};
const head = {
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    background: "#ddd"
};

const Header = () => (
    <div style={head}>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;