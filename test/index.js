import { expect } from "chai";
import rename from "../lib";

describe("yourLib", () => {
	it("should export a function", () =>
		expect(rename).to.be.instanceOf(Function));
});
