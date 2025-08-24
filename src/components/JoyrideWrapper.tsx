import { useEffect, useState } from "react";
import Joyride from "react-joyride";
import type { CallBackProps, Step } from "react-joyride";

const TOUR_STORAGE_KEY = "digitalWalletTourCompleted";

const steps: Step[] = [
  {
    target: "#nav-menu",
    content:
      "This is the navigation menu where you can switch between different sections of the site.",
    placement: "top",
  },
  {
    target: "#theme-toggle",
    content:
      "Click here to change your theme, you can select dark, light or according to your system.",
    placement: "left",
  },
  {
    target: "#user-toggle-menu",
    content:
      "Click here to access your profile, settings, and account options.",
    placement: "left",
  },
  {
    target: "#why-choose-us",
    content:
      "Here we highlight why our platform stands out and the benefits for you.",
    placement: "top",
  },

  {
    target: "#subscribe-us",
    content: "subscribe for staying with us to get update",
    placement: "top",
  },
];

export default function JoyrideWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [runTour, setRunTour] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem(TOUR_STORAGE_KEY);
    if (!completed) {
      setRunTour(true);
    }
  }, []);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    if (status === "finished" || status === "skipped") {
      localStorage.setItem(TOUR_STORAGE_KEY, "true");
      setRunTour(false);
    }
  };

  const restartTour = () => {
    setRunTour(true);
  };

  return (
    <>
      <Joyride
        steps={steps}
        run={runTour}
        continuous
        showSkipButton
        showProgress
        spotlightPadding={8}
        styles={{
          options: {
            zIndex: 10000,
            primaryColor: "#2563EB", // blue-600
            textColor: "#111827", // gray-900
            overlayColor: "rgba(0, 0, 0, 0.4)",
          },
        }}
        callback={handleJoyrideCallback}
      />
      {children}
      {/* Optional Restart Tour Button */}
      <button
        onClick={restartTour}
        className="fixed bottom-5 right-5 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Restart Tour
      </button>
    </>
  );
}
