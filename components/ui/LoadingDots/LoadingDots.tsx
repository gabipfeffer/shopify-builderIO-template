/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed, Spinner } from 'theme-ui'

const LoadingDots: React.FC = () => {
  return (
    <Themed.div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50vh',
      }}
    >
      <Spinner color={'text'} />
    </Themed.div>
  )
}

export default LoadingDots
