import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // @ts-expect-error
  test: {
    globals: true,
    root: __dirname,
    setupFiles: ["./vitest.setup.ts"],
  },
});
