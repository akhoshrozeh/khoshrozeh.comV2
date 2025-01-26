// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "anthony-personal-site",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {

    

    new sst.aws.StaticSite("AnthonyPersonalSite", {
      build: {
        command: "npx next build",
        output: "out"
      },
      domain: "khoshrozeh.com"
      
    });
  },
});
