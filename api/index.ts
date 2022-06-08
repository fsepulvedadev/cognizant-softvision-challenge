import {Candidate} from "../src/types/candidate";

export default {
  candidates: {
    list: (): Promise<Candidate[]> => Promise.resolve([]),
  },
};
