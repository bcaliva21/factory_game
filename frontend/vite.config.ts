import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import dotenv from 'dotenv'

const env = process.env.NODE_ENV
dotenv.config({ path: `.env.${env}` })

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [React()],
    server: {
        host: '0.0.0.0',
        port: 4173,
    },
})
