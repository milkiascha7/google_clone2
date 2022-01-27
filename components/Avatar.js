import Image from "next/dist/client/image"
import me from '../public/images/img.jpg'

const Avatar = ({ url, className }) => {
  return (
    <Image loading="lazy" src={url} className={`h-10 rounded-full cursor-pointer 
      transition duration-150 transform hover:scale-110 ${className} `}
      alt="profile pic" width={40} height={40} />
  )
}

export default Avatar
