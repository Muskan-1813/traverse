"use client"

import dynamic from "next/dynamic"

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
)

export default MotionDiv