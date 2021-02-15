import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import globalStore from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn:
    "https://5ddfaec1cad742aa84ecc59ea2b1dcc5@o511774.ingest.sentry.io/5609502",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});
ReactDOM.render(
    <Sentry.ErrorBoundary showDialog={true}>
      <BrowserRouter>
        <Provider store={globalStore}>
          <App />
        </Provider>
      </BrowserRouter>
    </Sentry.ErrorBoundary>,
  document.getElementById("root")
);
