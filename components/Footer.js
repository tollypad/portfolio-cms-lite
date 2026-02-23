'use client';

import { content } from '@/data/content';

export default function Footer() {
  const { footer } = content;

  return (
    <footer className="py-8 px-6 bg-neutral-900 text-neutral-400">
      <div className="container mx-auto text-center">
        <p className="text-sm">{footer.copyright}</p>
      </div>
    </footer>
  );
}
