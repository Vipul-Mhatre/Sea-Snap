import App from "next/app"
import { AuthProvider, getUser } from "../components/contexts/AuthContext"
const MyApp = ({ Component, pageProps, auth }) => {
  return (
    <AuthProvider myAuth={auth}>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const auth = await getUser(appContext.ctx)
  return { ...appProps, auth: auth }
}
export default MyApp