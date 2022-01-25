const router = require("express").Router();
const controller = require("./../controller");

router.post("/", controller.posting);
router.post("/comment/:post-id", controller.comment); // post/comment
router.post("/like/:post-id", controller.like); // post/like
router.post("/:post-id", controller.deletePosting); // post/like

module.exports = router;
