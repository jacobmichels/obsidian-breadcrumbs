import { MultiGraph } from "graphology";
// import { getReflexiveClosure } from "src/sharedFunctions";
import { myFunc } from "../src/utils";
// import { DIRECTIONS } from "../src/constants";

import { getOppDir, getReflexiveClosure } from "../src/graphUtils";

require("approvals").mocha();

describe("When running some tests", function () {
  it("should be able to use Approvals", function () {
    // const data = myFunc("Hello World!" + DIRECTIONS[0]);
    const data = myFunc("Hello World!");
    const userHiers = [
      {
        down: ["down"],
        next: ["next"],
        prev: ["prev"],
        same: ["same"],
        up: ["up", "parent"],
      },
    ];

    const g = new MultiGraph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");

    g.addEdge("A", "B", { dir: "up", field: "parent" });
    g.addEdge("C", "A", { dir: "prev", field: "prev" });

    getReflexiveClosure(g, userHiers);

    this.verify(data); // or this.verifyAsJSON(data)
  });
});

export {};
