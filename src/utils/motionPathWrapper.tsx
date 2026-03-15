"use client"

import dynamic from "next/dynamic"

const MotionPath = dynamic(
  () => import("framer-motion").then((m) => m.motion.path),
  { ssr: false }
)

export default MotionPath