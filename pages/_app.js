import { createGlobalStyle } from 'styled-components'
import MainLayout from './../components/layout'
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from '../context/AppContext';


const GlobalStyle = createGlobalStyle`
                body {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                  font-family:Poppins;
                  font-weight:normal;
                }
                a {
                  cursor: pointer;
                }
                img {
                  cursor: pointer;
                }

`
function MyApp({ Component, pageProps }) {

  return (
    <AppProvider>
      <MainLayout>
        <GlobalStyle />
        <Component {...pageProps} />
      </MainLayout>
    </AppProvider>

  )
}

export default MyApp
