'use client';

export default function Background() {
  return (
    <div className="bg-wrapper" aria-hidden="true">
      <div className="bg-gradient">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
        <div className="blob blob-5" />
        <div className="blob blob-6" />
      </div>
      <div className="noise-overlay" />
    </div>
  );
}
