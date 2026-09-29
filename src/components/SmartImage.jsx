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

  return (
    <div className={`overflow-hidden ${wrapperClassName}`}>
      {failedSrc === src ? (
        <div className="flex h-full w-full items-center justify-center bg-primary-100/60 text-center">
          <span className="px-4 py-6 font-sans text-sm text-ink-soft">{label}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailedSrc(src)}
          className={`h-full w-full object-cover ${className}`}
        />
      )}
    </div>
  )
}
