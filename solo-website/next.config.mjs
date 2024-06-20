// next.config.mjs
import path from 'path';

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Adicionar caminhos para resolver módulos
    config.resolve.modules.push(path.resolve('./'));
    config.resolve.modules.push(path.resolve('./node_modules'));

    // Adicionar fallbacks, se necessário
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Exemplo de desativação do fallback para fs
      };
    }

    return config;
  },
};

export default nextConfig;
