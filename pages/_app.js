import '../styles/globals.css'
import { SearchOptionProvider } from '../contexts/SearchOptionContext'
function MyApp({ Component, pageProps }) {
  return (
    <SearchOptionProvider>
      <Component {...pageProps} />
    </SearchOptionProvider>
  )
}

export default MyApp
