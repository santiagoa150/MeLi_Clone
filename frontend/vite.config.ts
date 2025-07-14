import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { EnvSchema } from './env.schema.ts';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.');
    const envValidation = EnvSchema.validate(env);
    if (envValidation.error) throw envValidation.error;

    return {
        plugins: [react(), tailwindcss()],
        server: {
            port: Number(env.VITE_APP_PORT),
        },
    };
});
