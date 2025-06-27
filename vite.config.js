import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	base: '/personality-survey-ai/',  // ← 這裡要和你的 GitHub repo 名稱一致
	plugins: [react()],
})
