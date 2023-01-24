import useSteps from "../../hooks/useSteps";
import FadeIn from "../primitives/fade-in/fade-in";

export default function HeadlineFadeIn() {
  const headlines = [
    "Liberte-se do stress e ansiedade",
    "Desperte a calma interior",
    "Encontre a tranquilidade",
  ];

  const { currentActiveStep } = useSteps({
    steps: headlines.length,
    interval: 5000,
    startOnStep: 1,
  });

  return (
    <FadeIn key={currentActiveStep}>
      <h1 className="mb-3 text-lg font-medium leading-snug tracking-widest text-white">
        {headlines[currentActiveStep]}
      </h1>
    </FadeIn>
  );
}
