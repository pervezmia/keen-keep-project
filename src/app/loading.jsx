import { BeatLoader } from "react-spinners";

export default function Loading() {
  // Or a custom loading skeleton component
//   return <p className="text-center">Loading...</p>
  return <p className="text-center"><BeatLoader /></p>
}