// Allowlist of certificate images served through the protected /api/certificates/[id] route.
// Files live in /certificates (outside /public) so they are never directly downloadable.
export const CERTIFICATE_FILES: Record<string, string> = {
  hnd: "hnd.jpg",
  nd: "nd.jpg",
  nysc: "nysc.jpg",
  henley: "henley.jpg",
  semicolon: "semicolon.jpg",
  "udemy-react": "udemy-react.jpg",
  "udemy-powershell-regex": "udemy-powershell-regex.jpg",
  "udemy-monday": "udemy-monday.jpg",
}
