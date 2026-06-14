import { createRoot } from 'react-dom/client';
import App from './App.jsx';

/* Self-hosted brand fonts - bundled so they always load (no reliance on
   the Google Fonts CDN, which was intermittently falling back to a system
   font on the display headline). */
import '@fontsource/bebas-neue/400.css';
import '@fontsource/onest/300.css';
import '@fontsource/onest/400.css';
import '@fontsource/onest/500.css';
import '@fontsource/onest/600.css';
import '@fontsource/onest/700.css';
import '@fontsource/onest/800.css';

/* Own the scroll position ourselves - the browser's automatic
   restoration fights ScrollSmoother and can land the page mid-document
   on reload. Always start at the top. */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

/* No StrictMode: it double-invokes effects in dev, which would create
   two ScrollSmoother instances on the same wrapper. */
createRoot(document.getElementById('root')).render(<App />);
