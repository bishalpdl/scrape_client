import { Provider } from "react-redux";
import Router from "./router/router";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </Provider>
      <Toaster
        position="top-center"
        toastOptions={{
          error: {
            duration: 3000,
          },
        }}
      />
    </>
  );
}

export default App;
