/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed, Spinner } from 'theme-ui'

const LoadingDots: React.FC<{ color?: string }> = ({ color }) => {
  return (
    <Themed.div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxHeight: '350px',
      }}
    >
      <Spinner color={color || 'text'} />
    </Themed.div>
  )
}

export default LoadingDots
