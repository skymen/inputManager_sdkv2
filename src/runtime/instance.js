import { id } from "../../config.caw.js";

export default function (parentClass) {
  return class extends parentClass {
    constructor() {
      super();
      const properties = this._getInitProperties();
      if (properties) {
      }

      this.inputs = {};
      this.lastTrigger = "";
    }

    _trigger(method) {
      super._trigger(self.C3.Plugins[id].Cnds[method]);
    }

    _release() {
      super._release();
    }

    _saveToJson() {
      return {
        inputs: JSON.stringify(this.inputs),
        lastTrigger: this.lastTrigger,
      };
    }

    _loadFromJson(o) {
      this.inputs = JSON.parse(o.inputs);
      this.lastTrigger = o.lastTrigger;
    }
  };
}
