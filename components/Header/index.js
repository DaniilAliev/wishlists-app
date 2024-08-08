import { Jockey_One } from 'next/font/google'

const jockeyOne = Jockey_One({
  weight: '400',
  subsets: ['latin']
})

const Header = () => {
  return (
    <header className="flex items-center justify-center h-24">
      <h1 className={`${jockeyOne.className} text-5xl text-dark-red`}>
        WishLists
      </h1>
    </header>
  )
}

export default Header
