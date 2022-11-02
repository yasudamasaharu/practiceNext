
export default function Footer({footerYear,footerName}) {

  return (
    <>
      <footer>
        {/* フッターの部品を追記する */}
        <p className="w-screen py-5 text-lg text-gray-300 text-center bg-gray-700 ">&copy;{footerYear} {footerName}</p>
      </footer>
    </>
  )
}