export default function BlogLayout({ Children }) {
    return (
        <div>
          <div>Blog Menu</div>
          <div>{Children}</div>
        </div>
    );
}