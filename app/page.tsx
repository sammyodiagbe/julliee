"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import EmailComponent from "@/components/emailComponent";

const items = ["Card Payment", "Transit", "Access control"];
const features = [
  {
    title: "Seamless Payments",
    description:
      "Make contactless payments with just a tap of your ring. No wallet or phone needed — secure, fast, and always on your finger.",
    badge: "Payment",
  },
  {
    title: "Transit Access",
    description:
      "Commute smarter by tapping your ring to board buses, trains, or subways. Compatible with major transit systems for effortless daily travel.",
    badge: "Transit",
  },
  {
    title: "Access Control",
    description:
      "Unlock doors, buildings, or cars using the ring as a secure digital key. Perfect for offices, smart homes, and keyless entry systems.",
    badge: "Access control",
  },
  {
    title: "Price starting at $99.99",
    description:
      "You’re not just buying a ring — you’re getting a digital wallet,metro pass, keycard, and a statement of style All in one sleek,waterproof smart ring.",
    badge: "Low budget",
  },
  {
    title: "Go in 3, simple as that.",
    description:
      "Snap to activate, switch between cards, and go. Whether you're paying, riding, or unlocking — it’s all on your finger.",
    badge: "Convenience and Style",
  },
  {
    title: "Biometric Security. EMVCo Certified.",
    description:
      "Built with fingerprint protection and global EMVCo compliance, the ring ensures your payments and access are always safe, seamless,and trusted.",
    badge: "Trusted and Secure",
  },
];

export default function Home() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };
  return (
    <>
      <nav className="p-8 flex justify-center items-center sticky bg-white top-0">
        <Image
          src={"/images/logo.svg"}
          className="h-8 font-extrabold"
          height={50}
          width={120}
          alt="logo"
        />
      </nav>
      <div className="p-8">
        <motion.div className=" grid grid-cols-2 ">
          <motion.section
            variants={itemVariants}
            className="space-y-3 flex flex-col gap-3 justify-center"
          >
            <h1 className="font-extrabold text-8xl w-[400px] leading-20">
              One ring to rule them all.
            </h1>
            <p>
              The ultimate convenience upgrade: tap to pay at any store, breeze
              through transit turnstiles, and unlock doors at work or home—all
              with the ring that&apos;s always on your finger. Join the waitlist
              today.
            </p>
            <div className="flex gap-2 py-3">
              {items.map((item, index) => {
                return (
                  <Badge variant={"default"} key={index}>
                    {item}
                  </Badge>
                );
              })}
            </div>
            <EmailComponent />
          </motion.section>
          <motion.section
            variants={itemVariants}
            className="flex items-center overflow-hidden justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={"/images/ring_hero 1.svg"}
                alt="Maltee blue ring"
                className="w-[800px]"
                height={400}
                width={400}
              />
            </motion.div>
          </motion.section>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          {/* <h1 className="text-5xl font-bold my-10">Features</h1> */}
          <div className="grid  grid-cols-3 mb-20 gap-20">
            {features.map((feature, ind) => {
              return (
                <motion.div
                  variants={itemVariants}
                  className="space-y-2"
                  key={ind}
                >
                  <h2 className="font-bold text-2xl">{feature.title}</h2>
                  <p>{feature.description}</p>
                  <Badge variant={"secondary"}>{feature.badge}</Badge>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 py-8"
        >
          <motion.div variants={itemVariants}>
            <Image
              src={"/images/image_ring 1.svg"}
              height={500}
              width={500}
              alt="Model wearing ring"
              className="w-full"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col py-20 space-y-10 justify-center px-10"
          >
            <h1 className="max-w-120 font-bold text-6xl">
              Get early access and launch discounts. Join the waitlist today.
            </h1>
            <EmailComponent />
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 p-8"
        >
          <motion.section className="flex items-center" variants={itemVariants}>
            <div className="flex flex-col space-y-5 max-w-120">
              <h2 className="text-bold text-6xl max-w-120 font-extrabold">
                Pay,Transit,Access with Confidence and Style.
              </h2>
              <p>
                Whether you&apos;re commuting, shopping, or accessing secure
                spaces, Julliee’s smart ring ensures seamless transactions and
                effortless control—right from your finger.
              </p>
              <EmailComponent />
            </div>
          </motion.section>

          <motion.div variants={itemVariants}>
            <Image
              src={"/images/image_pay_2 1.svg"}
              height={500}
              width={500}
              alt="Model wearing ring"
              className="w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
