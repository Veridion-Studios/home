import { Button } from "@/components/ui/button";
import {
  Upload,
  Lock,
  RefreshCcw,
  Fingerprint,
} from "lucide-react";

const features = [
  {
    name: "Push to deploy",
    description:
      "Deploy your project effortlessly with seamless integration. We make publishing updates fast, simple, and reliable.",
    icon: Upload,
  },
  {
    name: "SSL certificates",
    description:
      "Keep your users secure with automatic SSL certificates and strong encryption — no setup required.",
    icon: Lock,
  },
  {
    name: "Simple queues",
    description:
      "Handle background tasks and operations smoothly with our built-in queue system for reliable scaling.",
    icon: RefreshCcw,
  },
  {
    name: "Advanced security",
    description:
      "Industry-grade security built in from the start — authentication, encryption, and continuous monitoring.",
    icon: Fingerprint,
  },
];

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center animate-fadeIn relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-violet-900 -z-10" />
        <main className="container mx-auto max-w-7xl px-6 flex-grow flex items-center justify-center">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wider text-purple-400 mb-2">
              Launch faster
            </p>
            <h1 className="text-6xl md:text-6xl font-bold mb-4 text-white">
              Where Ideas Come to Life
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Veridion Studios is a creative agency for makers, dreamers, and
              founders — helping you turn sparks of imagination into stunning,
              scalable projects. From websites to full business launches, we make
              creation simple.
            </p>

            <Button
              size="xl"
              variant="purple"
              className="rounded-2xl mt-4 text-lg"
            >
              Get Started
            </Button>
          </div>
        </main>
      </section>

      {/* Features Section */}
      <section className="bg-gray-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-purple-400">
              Deploy faster
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Everything you need to launch your vision
            </p>
            <p className="mt-6 text-lg text-gray-300">
              From design to deployment, Veridion Studios gives creators and
              founders the tools and support to bring ideas to life — beautifully
              and efficiently.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-lg font-semibold text-white">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-purple-600">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base text-gray-400">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
