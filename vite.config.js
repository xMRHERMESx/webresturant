import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isPreview = process.env.BASE44_PREVIEW_MODE === '1'
const publicSuffix = process.env.BASE44_PUBLIC_HOST_SUFFIX
const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN

// When running in the Base44 preview sandbox, accept the preview proxy's host.
// The proxy forwards the public host (3000-<suffix>) which differs from the
// sandbox domain that __VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS covers.
const allowedHosts = []
if (isPreview) {
  if (publicSuffix) allowedHosts.push(`3000-${publicSuffix}`)
  if (sandboxDomain) allowedHosts.push(`.${sandboxDomain}`)
}

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    ...(allowedHosts.length ? { allowedHosts } : {}),
  },
})
