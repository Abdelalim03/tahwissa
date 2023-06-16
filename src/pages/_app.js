import Layout from "@/components/shared/Layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../../store";
import { AuthProvider } from "@/components/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Provider>
  );
}
