export function assetUrl(...segments) {
  return encodeURI(`/assets/${segments.join('/')}`)
}
