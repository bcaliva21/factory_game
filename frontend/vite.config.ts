import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [React()],
    server: {
        host: '0.0.0.0',
        port: 4173,
    },
})
