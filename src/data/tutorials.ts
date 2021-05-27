import nep17 from "./tutorials/nep17";
import registrar from "./tutorials/registrar";

type Tutorial = {
  number: number;
  title: string;
  content: { onlyRelevantFor?: "ui" | "cmd"; segment: JSX.Element }[];
  basedOn: { name: string; url: string };
};

const tutorials: Tutorial[] = [registrar, nep17];

export { tutorials, Tutorial };
