import PlusSvg from '@/assets/images/Plus.svg'

const WishlistPageAddItem = () => {
  return (
    <div className="discover-page-item cursor-pointer">
      <div className="discover-page-item__image">
        <div className="size-full flex justify-center items-center rounded-xl border-2 border-dark-red">
          <PlusSvg />
        </div>
      </div>
      <div>
        <p>Add Wishlist</p>
      </div>
    </div>
  )
}

export default WishlistPageAddItem
