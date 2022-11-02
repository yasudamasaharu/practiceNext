import{ useAppContext } from "../context/AppContext";

export default function PageLink() {
  const [text, setText] = useAppContext();

  const clickHandler = () => {
    setText(console.log('clicked'))
  }
  return (
    <>
      <button onClick={clickHandler}>テスト</button>
    </>
  )
}