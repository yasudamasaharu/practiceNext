import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function Setting({query}) {
  const router = useRouter();
  // let path;
  // useEffect(() => {
  //   const viewPath = location.href;
  //   console.log(viewPath);
  //   return path = viewPath;
  // }, [])
  
  const clickHandler = () => {
    router.push('/', 'clickURL');
  }
  return (
    <>
      <h1>routerから取得:{router.query.num}</h1>
      <button onClick={clickHandler}>ボタン</button>
    </>
  )
}

export async function getServerSideProps({query}) {
  return {
    props: { query }
  }
}