export default function Footer({ url = '/' }) {
  return (
    <div className={'footer'}>
      <a href={url}>gistdoc</a>
    </div>
  );
}