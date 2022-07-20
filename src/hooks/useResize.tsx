import { useEffect, useState } from "react"

const useResize = () => {

  const [widthPage, setWidthPage] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => { setWidthPage(window.innerWidth) }
    window.addEventListener('resize', handleResize)
  }, [widthPage])

  return { widthPage }

}

export default useResize