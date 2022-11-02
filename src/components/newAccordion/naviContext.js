const categoryContext = [
  {link: "1", name: "トップス", type:"tops"},
  {link: "2", name: "パンツ", type:"pants"},
  {link: "3", name: "スカート", type:"skirt"},
  {link: "4", name: "ワンピース/ドレス", type:"dress"},
  {link: "5", name: "シューズ", type:"shose"},
  {link: "6", name: "アクセサリー", type:"accessory"},
]

const addText = 'から探す'
const searchContext = [
  {link: "7", name:`ブランド${addText}`},
  {link: "8", name:`公式ショップ${addText}`},
  {link: "9", name:`ランキング${addText}`},
  {link: "10", name:`セール対象${addText}`},
  {link: "11", name:`古着${addText}`},
  {link: "12", name:`コーディネート${addText}`},
]

const favoriteContext = [
  {link:"13", name:"アイテム"},
  {link:"14", name:"ブランド"},
  {link:"15", name:"ショップ"},
]


export {categoryContext, searchContext, favoriteContext}