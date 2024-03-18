// vite.config.ts
import { defineConfig } from "file:///home/slowie/go/src/github.com/sethlowie/zilfi/node_modules/.pnpm/vite@5.1.5_@types+node@20.11.25/node_modules/vite/dist/node/index.js";
import typescript from "file:///home/slowie/go/src/github.com/sethlowie/zilfi/node_modules/.pnpm/@rollup+plugin-typescript@11.1.6_tslib@2.6.2_typescript@5.3.3/node_modules/@rollup/plugin-typescript/dist/es/index.js";
import path from "path";
import { typescriptPaths } from "file:///home/slowie/go/src/github.com/sethlowie/zilfi/node_modules/.pnpm/rollup-plugin-typescript-paths@1.5.0_typescript@5.3.3/node_modules/rollup-plugin-typescript-paths/dist/index.js";
var __vite_injected_original_dirname = "/home/slowie/go/src/github.com/sethlowie/zilfi/packages/core";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zbG93aWUvZ28vc3JjL2dpdGh1Yi5jb20vc2V0aGxvd2llL3ppbGZpL3BhY2thZ2VzL2NvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3Nsb3dpZS9nby9zcmMvZ2l0aHViLmNvbS9zZXRobG93aWUvemlsZmkvcGFja2FnZXMvY29yZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9zbG93aWUvZ28vc3JjL2dpdGh1Yi5jb20vc2V0aGxvd2llL3ppbGZpL3BhY2thZ2VzL2NvcmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuXG5pbXBvcnQgdHlwZXNjcmlwdCBmcm9tIFwiQHJvbGx1cC9wbHVnaW4tdHlwZXNjcmlwdFwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IHR5cGVzY3JpcHRQYXRocyB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXR5cGVzY3JpcHQtcGF0aHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW10sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW1xuICAgICAge1xuICAgICAgICBmaW5kOiBcIn5cIixcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbWFuaWZlc3Q6IHRydWUsXG4gICAgbWluaWZ5OiB0cnVlLFxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxuICAgICAgZmlsZU5hbWU6IFwibWFpblwiLFxuICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJjanNcIl0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW10sXG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIHR5cGVzY3JpcHRQYXRocyh7XG4gICAgICAgICAgcHJlc2VydmVFeHRlbnNpb25zOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgdHlwZXNjcmlwdCh7XG4gICAgICAgICAgc291cmNlTWFwOiBmYWxzZSxcbiAgICAgICAgICBkZWNsYXJhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBvdXREaXI6IFwiZGlzdFwiLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVyxTQUFTLG9CQUFvQjtBQUVuWSxPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFKaEMsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDO0FBQUEsRUFDVixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQzlDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsSUFDUixzQkFBc0I7QUFBQSxJQUN0QixLQUFLO0FBQUEsTUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDN0MsVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3ZCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUM7QUFBQSxNQUNYLFNBQVM7QUFBQSxRQUNQLGdCQUFnQjtBQUFBLFVBQ2Qsb0JBQW9CO0FBQUEsUUFDdEIsQ0FBQztBQUFBLFFBQ0QsV0FBVztBQUFBLFVBQ1QsV0FBVztBQUFBLFVBQ1gsYUFBYTtBQUFBLFVBQ2IsUUFBUTtBQUFBLFFBQ1YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
