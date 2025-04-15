import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Robo Collective Nexus',
    short_name: 'RCNexus',
    description: 'A community of robotics enthusiasts and professionals',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a0f2e',
    theme_color: '#47a8bd',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}