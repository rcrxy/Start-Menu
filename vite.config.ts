import { loadEnv } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import type { UserConfigExport, ConfigEnv } from "vite";

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
   const env = loadEnv(mode, process.cwd());

   return {
      plugins: [
         vue({}),
         eslintPlugin({
            include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue", "src/**/*.ts"]
         })
      ],
      server: {
         hmr: true,
         host: true,
         port: 8000,
         strictPort: true,
         open: "index.html",
         proxy: {
            "/system": {
               target: env.VITE_BASEURL,
               changeOrigin: true,
               rewrite: path => path.replace(/^\/system/, "/system")
            }
         }
      },
      css: {
         // css预处理器
         preprocessorOptions: {
            scss: {
               additionalData: `@use "@/assets/style/style.scss" as *;`
            }
         }
      },
      base: env.VITE_PUBLIC_BASE,
      resolve: {
         alias: {
            "@": path.resolve(__dirname, "./src"),
            "@img": path.resolve(__dirname, "./src/assets/images"),
            "@views": path.resolve(__dirname, "./src/views"),
            "@service": path.resolve(__dirname, "./src/service")
         }
      }
   };
};
