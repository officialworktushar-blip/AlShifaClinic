import { useState } from 'react'

export default function SmartImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  label = 'Photo coming soon',
  loading = 'lazy',
}) {
  const [failedSrc, setFailedSrc] = useState(null)

  if (failedSrc === src) {
    return (
      <div
        className={`flex items-center justify-center bg-primary-100/60 text-center ${wrapperClassName}`}
      >
        <span className="px-4 py-6 font-sans text-sm text-ink-soft">{label}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setFailedSrc(src)}
      className={className}
    />
  )
}
