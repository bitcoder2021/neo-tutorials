import registrar from "./tutorials/registrar";

type Tutorial = {
  number: number;
  title: string;
  content: { onlyRelevantFor?: "ui" | "cmd"; segment: JSX.Element }[];
};

const tutorials: Tutorial[] = [registrar /*, nep17*/];

export { tutorials, Tutorial };
