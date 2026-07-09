import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/borankaradag/', // GitHub repo adı buraya gelmeli. Eğer sadece .github.io ise '/' olmalı.
})
