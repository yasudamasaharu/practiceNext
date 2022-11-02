import Link from 'next/link'
export default function ItemNav() {
  const List = [
    { link: "tera", item:"テーラードジャケット"},
  //  { link: "ncj", item:"ノーカラージャケット"},
  //   {link: "ncc", item:"ノーカラーコート"},
  //   {link: "dj", item:"デニムジャケット"},
  //   {link: "rj", item:"ライダースジャケット"},
  //   {link: "downj", item:"ダウンジャケット"},
  //   {link: "downb", item:"ダウンベスト"},
  ]


  return (
    <div className="absolute top-0 -right-52 flex flex-col w-200 bg-red-100">
      {List.map(({link, item},i) => {
        return (
          <div className="pb-2" key={i}>
            <Link href={link}>
              <a>{item}</a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}