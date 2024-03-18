// vite.config.ts
import { defineConfig } from "file:///home/slowie/go/src/github.com/sethlowie/zilfi/node_modules/.pnpm/vite@5.1.5_@types+node@20.11.25/node_modules/vite/dist/node/index.js";
import typescript from "file:///home/slowie/go/src/github.com/sethlowie/zilfi/node_modules/.pnpm/@rollup+plugin-typescript@11.1.6_tslib@2.6.2_typescript@5.3.3/node_modules/@rollup/plugin-typescript/dist/es/index.js";
import path from "path";
import { typescriptPaths } from "file:///home/slowie/go/src/github.com/sethlowie/zilfi/node_modules/.pnpm/rollup-plugin-typescript-paths@1.5.0_typescript@5.3.3/node_modules/rollup-plugin-typescript-paths/dist/index.js";
var __vite_injected_original_dirname = "/home/slowie/go/src/github.com/sethlowie/zilfi/packages/react";
var vite_config_default = defineConfig({
  plugins: [],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__vite_injected_original_dirname, "./src")
      }
    ]
  },
  server: {
    port: 3e3
  },
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      fileName: "main",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: [],
      plugins: [
        typescriptPaths({
          preserveExtensions: true
        }),
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: "dist"
        })
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zbG93aWUvZ28vc3JjL2dpdGh1Yi5jb20vc2V0aGxvd2llL3ppbGZpL3BhY2thZ2VzL3JlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9zbG93aWUvZ28vc3JjL2dpdGh1Yi5jb20vc2V0aGxvd2llL3ppbGZpL3BhY2thZ2VzL3JlYWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Nsb3dpZS9nby9zcmMvZ2l0aHViLmNvbS9zZXRobG93aWUvemlsZmkvcGFja2FnZXMvcmVhY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHR5cGVzY3JpcHQgZnJvbSBcIkByb2xsdXAvcGx1Z2luLXR5cGVzY3JpcHRcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyB0eXBlc2NyaXB0UGF0aHMgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi10eXBlc2NyaXB0LXBhdGhzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFtcbiAgICAgIHtcbiAgICAgICAgZmluZDogXCJ+XCIsXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICB9LFxuICBidWlsZDoge1xuICAgIG1hbmlmZXN0OiB0cnVlLFxuICAgIG1pbmlmeTogdHJ1ZSxcbiAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogdHJ1ZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9pbmRleC50c1wiKSxcbiAgICAgIGZpbGVOYW1lOiBcIm1haW5cIixcbiAgICAgIGZvcm1hdHM6IFtcImVzXCIsIFwiY2pzXCJdLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtdLFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICB0eXBlc2NyaXB0UGF0aHMoe1xuICAgICAgICAgIHByZXNlcnZlRXh0ZW5zaW9uczogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICAgIHR5cGVzY3JpcHQoe1xuICAgICAgICAgIHNvdXJjZU1hcDogZmFsc2UsXG4gICAgICAgICAgZGVjbGFyYXRpb246IHRydWUsXG4gICAgICAgICAgb3V0RGlyOiBcImRpc3RcIixcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVcsU0FBUyxvQkFBb0I7QUFDdFksT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBSGhDLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQztBQUFBLEVBQ1YsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUM5QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1Isc0JBQXNCO0FBQUEsSUFDdEIsS0FBSztBQUFBLE1BQ0gsT0FBTyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQzdDLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxJQUN2QjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDO0FBQUEsTUFDWCxTQUFTO0FBQUEsUUFDUCxnQkFBZ0I7QUFBQSxVQUNkLG9CQUFvQjtBQUFBLFFBQ3RCLENBQUM7QUFBQSxRQUNELFdBQVc7QUFBQSxVQUNULFdBQVc7QUFBQSxVQUNYLGFBQWE7QUFBQSxVQUNiLFFBQVE7QUFBQSxRQUNWLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
