"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import EmailComponent from "@/components/emailComponent";
import {
  AccessControlIcon,
  ConvenienceIcon,
  PriceIcon,
  SecurityIcon,
  TransitIcon,
  PaymentIcon,
  BatteryIcon,
} from "@/components/icons/icons";

const items = ["Card Payment", "Transit", "Access control"];
const features = [
  {
    title: "Seamless Payments",
    description:
      "Make contactless payments with just a tap of your ring. No wallet or phone needed — secure, fast, and always on your finger.",
    badge: "Payment",
    Icon: PaymentIcon,
  },
  {
    title: "Transit Access",
    description:
      "Commute smarter by tapping your ring to board buses, trains, or subways. Compatible with major transit systems for effortless daily travel.",
    badge: "Transit",
    Icon: TransitIcon,
  },
  {
    title: "Access Control",
    description:
      "Unlock doors, buildings, or cars using the ring as a secure digital key. Perfect for offices, smart homes, and keyless entry systems.",
    badge: "Access control",
    Icon: AccessControlIcon,
  },
  {
    title: "5 days battery life.",
    description:
      "Stay powered through your week with a single charge. The ring is optimized for low energy use, giving you up to five days of seamless performance — no daily charging needed.",
    badge: "Battery life",
    Icon: BatteryIcon,
  },
  {
    title: "Go in 3, simple as that.",
    description:
      "Snap to activate, switch between cards, and go. Whether you're paying, riding, or unlocking — it’s all on your finger.",
    badge: "Convenience and Style",
    Icon: ConvenienceIcon,
  },
  {
    title: "Biometric Security. EMVCo Certified.",
    description:
      "Built with fingerprint protection and global EMVCo compliance, the ring ensures your payments and access are always safe, seamless,and trusted.",
    badge: "Trusted and Secure",
    Icon: SecurityIcon,
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
      <nav className="p-2 max-w-full md:p-8 flex justify-center items-center sticky bg-white top-0">
        <Image
          src={"/images/logo.svg"}
          className="h-8 font-extrabold"
          height={50}
          width={120}
          alt="logo"
        />
      </nav>
      <div className="p-2 md:p-5">
        <motion.div className=" grid grid-cols-1 md:grid-cols-2 w-full">
          <motion.section
            variants={itemVariants}
            className="space-y-3 flex flex-col gap-3 justify-center"
          >
            <h1 className="font-extrabold  text-8xl md:w-[400px] leading-20">
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
          viewport={{ once: true, amount: 0.3 }}
          className=""
        >
          {/* <h1 className="text-5xl font-bold my-10">Features</h1> */}
          <div className="grid  md:grid-cols-3 mb-20 gap-20">
            {features.map((feature, ind) => {
              return (
                <motion.div
                  variants={itemVariants}
                  className="space-y-2 mt-2"
                  key={ind}
                >
                  <div className="flex justify-center items-center">
                    {<feature.Icon className="h-15 w-15 " />}
                  </div>
                  <h2 className="font-bold text-2xl text-center">
                    {feature.title}
                  </h2>
                  <p className="text-center">{feature.description}</p>
                  {/* <Badge variant={"outline"}>{feature.badge}</Badge> */}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 py-8"
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
            className="flex flex-col py-20 space-y-10 justify-center px-2 md:px-10"
          >
            <h1 className="w-full md:max-w-120 font-bold text-6xl">
              Get early access and launch discounts. Join the waitlist today.
            </h1>
            <p>
              Be among the first to experience the future of smart wearables —
              combining cutting-edge security, effortless convenience, and sleek
              design. Join our waitlist today to unlock exclusive launch
              discounts, early access, and a front-row seat to the next
              evolution in payments, transit, and access control.
            </p>
            <EmailComponent />
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 py-8 "
        >
          <motion.div
            className="flex flex-col py-20 space-y-10 justify-center px-2 md:px-10"
            variants={itemVariants}
          >
            <h1 className="w-full md:max-w-120 font-bold text-6xl">
              Pay, Transit, Access with Confidence and Style.
            </h1>
            <p>
              Whether you&apos;re commuting, shopping, or accessing secure
              spaces, Julliee’s smart ring ensures seamless transactions and
              effortless control—right from your finger.
            </p>
            <EmailComponent />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Image
              src={"/images/image_pay_2 1.svg"}
              height={500}
              width={500}
              alt="Model wearing ring"
              className="max-w-full w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
