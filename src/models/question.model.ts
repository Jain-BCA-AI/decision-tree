import { AvailableFeatures } from "./available-features.model";

export interface Question {
  question: string;
  answer: boolean | null;
  feature: AvailableFeatures["feature"];
}
