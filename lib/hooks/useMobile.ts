import { useEffect, useState } from 'react'

const useMobile = () => {
  // Initialize state with undefined width so server and client renders match
  const [windowSize, setWindowSize] = useState(undefined)
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      // @ts-ignore
      setWindowSize(window.innerWidth)
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  // @ts-ignore
  return windowSize <= 768
}

export default useMobile
