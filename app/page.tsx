"use client";

import { motion } from "framer-motion";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import {  Search, PenTool, ScrollText, BookOpenText } from "lucide-react";

const features = [
  {
    name: "The Veridion Book Hunt",
    description:
      "Step into The Veridion Book Hunt — a bookstore and library scavenger adventure where every clue uncovers hidden literary treasures. Solve clever puzzles, earn unique rewards, and let your curiosity guide you to unforgettable stories and discoveries.",
    icon: Search,
  },
  {
    name: "The Veridion Writer's Co-Op",
    description:
      "Join The Veridion Writer’s Co-Op — a collaborative community where creativity meets storytelling. Connect with fellow writers, share ideas, and bring unforgettable worlds to life together.",
    icon: PenTool,
  },
  {
    name: "The Veridion Logbook",
    description:
      "Track your reading journey with The Veridion Logbook — a place to record books, celebrate milestones, and discover new adventures along the way. Turn every page into part of your story",
    icon: ScrollText,
  },
  {
    name: "The Veridion Publishing Company",
    description:
      "The Veridion Publishing Company is the in-house press of The Veridion Writer’s Co-Op, where creativity takes many forms. Alongside works by our authors and contributors, we also publish innovative AI-assisted books — collaborative experiments that blend human imagination with cutting-edge technology to spark new kinds of storytelling. Every book, whether written by pen or processor, is crafted to surprise, inspire, and push the boundaries of what stories can be.",
    icon: BookOpenText,
  },
];

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-8 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-block max-w-5xl text-center justify-center space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={title({ size: "lg" })}
          >
            Unlock the&nbsp;
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={title({ size: "lg", color: "violet" })}
          >
            Adventure&nbsp;
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={title({ size: "lg" })}
          >
            Of Reading
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className={subtitle({ class: "mt-6" })}
          >
            Discover a world of programs designed for readers and writers. The
            Veridion Library brings you book hunts, creative challenges, and
            collaborative storytelling—each crafted to spark imagination. Your
            next adventure starts here.
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex gap-4"
        >
          <Button
            className="bg-linear-to-tr from-violet-600 to-purple-500 text-white shadow-lg"
            size="lg"
          >
            View our Programs
          </Button>

          <Button
            className="bg-linear-to-tr from-neutral-800 to-neutral-700 text-white shadow-lg"
            size="lg"
          >
            About Us
          </Button>
        </motion.div>
      </section>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-violet-600">
              Deploy faster
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
              In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-linear-to-tr from-violet-600 to-purple-500">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-400">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}