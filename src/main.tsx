// main.tsx
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { inject } from '@vercel/analytics'; // ✅ Import Vercel Analytics

inject(); // ✅ Initialize Analytics

createRoot(document.getElementById("root")!).render(<App />);
