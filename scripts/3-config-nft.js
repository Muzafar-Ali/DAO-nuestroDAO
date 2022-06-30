import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x5299E816C95c2319D2697A4D73FFEb8Afa32b0E7");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Plan this Dao Pic",
        description: "This NFT will give you access to nuestroDAO!",
        image: readFileSync("scripts/assets/DAO-pic.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
