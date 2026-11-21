// @ts-check
import { module } from "@prisma/composer";
import apixPlatformService from "./service.mjs";

export default module("apixitated", ({ provision }) => {
  provision(apixPlatformService, { id: "apixplatform" });
});
