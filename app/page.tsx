import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import {
  Upload,
  Lock,
  RefreshCcw,
  Fingerprint,
} from "lucide-react";

const features = [
  {
    name: "Website Development",
    description:
      "We will build you a modern, responsive website that showcases your brand and captivates your audience.",
    icon: Upload,
  },
  {
    name: "YSWS Programs",
    description:
      "You make an awesome project, we will ship you a prize!",
    icon: Lock,
  },
  {
    name: "Other Services",
    description:
      "We offer a ton of services to help you get started, contact us for more information.",
    icon: RefreshCcw,
  },
  {
    name: "Small Business Management",
    description:
      "Have you always wanted to start a small business? We can help you with that! Just let us know some information about your busines, and we will get you started.",
    icon: Fingerprint,
  },
];

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center animate-fadeIn relative">
      {/*  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-violet-900 -z-10" /> */}
        <main className="container mx-auto max-w-7xl flex-grow flex items-center justify-center">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wider text-purple-700 dark:text-purple-400 mb-2">
              Build Your Project Today
            </p>
            <TextAnimate 
              className="text-6xl md:text-6xl font-bold mb-4 text-black dark:text-white" 
              animation="blurIn" 
              as="h1"
            >
                Where Ideas Come to Life
            </TextAnimate>
            <TextAnimate 
              className="text-lg md:text-xl mb-8 text-neutral-900 dark:text-neutral-400"
              animation="blurIn"
              as="h1"
              delay={1}
              >
              Veridion Studios is a creative agency for makers, dreamers, and
              founders — helping you turn sparks of imagination into stunning,
              scalable projects. From websites to full business launches, we make
              creation simple.
            </TextAnimate>

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
      <section className="sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-purple-400">
              Deploy faster
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Everything you need to launch your vision
            </p>
            <p className="mt-6 text-lg text-neutral-300">
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
