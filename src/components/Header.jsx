export default function Header({ author }) {
    return <h1>React Playground {author ? author : 'X'}</h1>
}