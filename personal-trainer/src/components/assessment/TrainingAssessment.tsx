import { useState } from "react";
import ProgramCoverCollage from "./ProgramCoverCollage";

interface ProgramCover {
  id: string;
  name: string;
  image: string;
}

interface Props {
  programCovers: ProgramCover[];
}

type View = "intro" | "quiz";

export default function TrainingAssessment({ programCovers }: Props) {
  const [view, setView] = useState<View>("intro");

  const startQuiz = () => {
    setView("quiz");
    window.requestAnimationFrame(() => {
      document.getElementById("assessment-quiz")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  if (view === "quiz") {
    return (
      <section
        id="assessment-quiz"
        className="mx-auto max-w-2xl px-6 py-16 md:py-24"
        aria-label="Training program assessment"
      >
        <button
          type="button"
          onClick={() => setView("intro")}
          className="mb-8 text-sm font-semibold uppercase tracking-wider text-white/60 transition-colors hover:text-primary"
        >
          ← Back to intro
        </button>

        <div className="rounded-lg border border-white/10 bg-surface/60 px-6 py-12 text-center">
          <p className="font-heading text-3xl tracking-wider text-white md:text-4xl">
            Let&apos;s find your program
          </p>
          <p className="mt-4 text-white/70">
            Answer a few quick questions about your goals, experience, and
            schedule.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        Free Program Match
      </p>

      <h1 className="mt-4 font-heading text-4xl leading-tight tracking-wider text-white sm:text-5xl md:text-6xl">
        Find the Perfect Program for Your Goals
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
        Take this free quiz to get matched with the right program based on your
        goals and experience. Less than 10 questions and no sign-up required.
      </p>

      <div className="mt-10">
        <ProgramCoverCollage covers={programCovers} />
      </div>

      <button
        type="button"
        onClick={startQuiz}
        className="mt-10 inline-block rounded bg-primary px-10 py-3 text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
      >
        Start Quiz
      </button>
    </section>
  );
}
