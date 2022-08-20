import '../styles/globals.css'
import Layout from '../components/Layout'
import {StateConetxt} from '../context/StateContext'
import {Toaster} from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <StateConetxt>
      <Layout>
      <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </StateConetxt>
  )
}

export default MyApp
