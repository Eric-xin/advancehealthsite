'use client';

import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function TeamPage() {
  return (
    <>
      <Background />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main className="min-h-screen pt-20">
          <Team />
        </main>
        <Footer />
      </div>
    </>
  );
}
