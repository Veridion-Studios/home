'use client';

const HomePage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center animate-fadeIn relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 -z-10" />
      <main className="container mx-auto max-w-7xl px-6 flex-grow flex items-center justify-center">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-wider text-purple-600 mb-2">
            Launch faster
          </p>
          <h1 className="text-6xl md:text-6xl font-bold mb-4 text-white">
            Where Ideas Come to Life
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Veridion Studios is a creative agency for makers, dreamers, and founders — helping you turn sparks of imagination into stunning, scalable projects. From websites to full business launches, we make creation simple.
          </p>
        </div>
      </main>
    </section>
  );
};

export default HomePage;
