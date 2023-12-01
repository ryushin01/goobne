import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  // root path 선언 필요: repository name과 동일하게 선언하기
  base: '/goobne',
  // vite에서 svg를 사용하기 위한 세팅
  plugins: [svgr(), react()],
  server: {
    // npm run dev 시 웹 브라우저 자동 열기
    open: true,
  },
  build: {
    // 패키지 크기 압축
    chunkSizeWarningLimit: 1600,
  },
});
