import { action, condition, expression } from "../template/aceDefine.js";

const general = "general";
const simulate = "simulate";

action(
  general,
  "SetUp",
  {
    id: "setup5",
    c2id: 5,
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set up input",
    displayText: "Set [b]{0}[/b] to up",
    description: "Set an input to an up state",
    params: [
      {
        id: "input0",
        name: "Input",
        desc: "The input to set",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (input) {
    if (this.inputs[input]) {
      this.inputs[input] = false;
      this.lastTrigger = input;
      this._trigger("OnUp");
      this._trigger("AnyUp");
    }
  }
);

action(
  general,
  "SetDown",
  {
    id: "setdown6",
    c2id: 6,
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set down input",
    displayText: "Set [b]{0}[/b] to down",
    description: "Set an input to a down state",
    params: [
      {
        id: "input0",
        name: "Input",
        desc: "The input to set",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (input) {
    if (!this.inputs[input]) {
      this.inputs[input] = true;
      this.lastTrigger = input;
      this._trigger("OnDown");
      this._trigger("AnyDown");
    }
  }
);

action(
  simulate,
  "SimulateDownTrigger",
  {
    id: "simulate-down-trigger",
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Simulate Down Event",
    displayText: "Simulate [b]{0}[/b] down event",
    description:
      "This only triggers a down event, but does not change the state of the input",
    params: [
      {
        id: "input",
        name: "Input",
        desc: "The input to simulate a down input on",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (input) {
    this.lastTrigger = input;
    this._trigger("OnDown");
    this._trigger("AnyDown");
  }
);

action(
  simulate,
  "SimulateUpTrigger",
  {
    id: "simulate-up-trigger",
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Simulate Up Event",
    displayText: "Simulate [b]{0}[/b] up event",
    description:
      "This only triggers an up event, but does not change the state of the input",
    params: [
      {
        id: "input",
        name: "Input",
        desc: "The input to simulate an up input on",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (input) {
    this.lastTrigger = input;
    this._trigger("OnUp");
    this._trigger("AnyUp");
  }
);

condition(
  general,
  "IsDown",
  {
    id: "isdown0",
    c2id: 0,
    highlight: false,
    deprecated: false,
    listName: "Is Down",
    displayText: "Is [b]{0}[/b] down",
    description: "Check if an input is down",
    params: [
      {
        id: "input0",
        name: "Input",
        desc: "The input to check",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (input) {
    return this.inputs[input];
  }
);

condition(
  general,
  "OnDown",
  {
    id: "ondown1",
    c2id: 1,
    highlight: false,
    deprecated: false,
    isTrigger: true,
    listName: "On Input Pressed",
    displayText: "On [b]{0}[/b] pressed",
    description: "Check if an input was last pressed",
    params: [
      {
        id: "input0",
        name: "Input",
        desc: "The input to check",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (input) {
    return this.lastTrigger === input;
  }
);

condition(
  general,
  "OnUp",
  {
    id: "onup2",
    c2id: 2,
    highlight: false,
    deprecated: false,
    isTrigger: true,
    listName: "On Input Released",
    displayText: "On [b]{0}[/b] released",
    description: "Check if an input was last released",
    params: [
      {
        id: "input0",
        name: "Input",
        desc: "The input to check",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (input) {
    return this.lastTrigger === input;
  }
);

condition(
  general,
  "AnyUp",
  {
    id: "anyup3",
    c2id: 3,
    highlight: false,
    deprecated: false,
    isTrigger: true,
    listName: "On Any Released",
    displayText: "On any input released",
    description: "Check if any input was last released",
  },
  function () {
    return true;
  }
);

condition(
  general,
  "AnyDown",
  {
    id: "anydown4",
    c2id: 4,
    highlight: false,
    deprecated: false,
    isTrigger: true,
    listName: "On Any Pressed",
    displayText: "On any input pressed",
    description: "Check if any input was last pressed",
  },
  function () {
    return true;
  }
);

expression(
  general,
  "GetLast",
  {
    id: "getlast7",
    c2id: 7,
    highlight: false,
    deprecated: false,
    returnType: "string",
    description: "Get the last input that was triggered",
  },
  function () {
    return this.lastTrigger;
  }
);
