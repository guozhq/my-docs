import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import Blog from "./layouts/Blog.vue";

export default defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      new Date("2022-01-01"),
      {
        // "/": "Running time: :day days :hour hours :minute minutes :second seconds",
        // "/zh/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
    setupSnowFall();
    setupTransparentNavbar({ type: "homepage" });
  },
  layouts: {
    // ...
    Blog,
  },
});