import { RiAddFill } from '@remixicon/react'
import { RiSubtractFill } from '@remixicon/react'
export default function CountNumber() {
  return (
    <div className="flex justify-center items-center space-x-4">
      {/* The default color is the current text color (currentColor) */}
      <RiSubtractFill color="black" size="1em" />
      {/* The default size is 24 */}{' '}
      <div className="text-black text-[13px] font-light font-['IBM Plex Mono']">
        1
      </div>
      {/* This sets the icon size to the current font size */}
      <RiAddFill color="black" size="1em" />
    </div>
  )
}
