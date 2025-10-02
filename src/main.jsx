import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://6bcdf06eadaee8af1f757ceac6ba9ddd@o4510120328888320.ingest.de.sentry.io/4510120329936976",
  sendDefaultPii: true
});

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  throw new Error("Root element with id 'root' not found.");
}
