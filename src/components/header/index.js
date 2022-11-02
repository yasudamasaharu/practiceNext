import Link from 'next/link';
import MobileMenuBtn from '../mobileMenu';


export default function Header() {
  const navList = [
    "top",
    "link",
    "access",
    "contact",
    "back"
  ];

  return (
    <header className='w-screen'>
      <Link href="/">
        {/* 後から修正 */}
        <a className='flex items-center text-5xl py-4 pl-2 text-gray-600 cursor-pointer'>My Site</a>
      </Link>
      <nav>
        <ul className="flex w-screen justify-between">
          {navList.map((list)=> {
            return (
              <li key={list} className="w-screen py-4 text-center bg-gray-700 border-l-2 border-gray-300 first-of-type:border-0 cursor-pointer">
                <Link href={`/${list}`}>
                  <a className='font-semibold text-gray-50'>{list}</a>
                </Link>
              </li>
            ) 
          })}
        </ul>
      </nav>
      <MobileMenuBtn /> 
    </header>
  )
}