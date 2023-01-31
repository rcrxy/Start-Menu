import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", () => {
   /*
      全局样式是否为默认值
      1 : 存在非默认值
      0 : 全为默认样式
   */
   const globalStyle = ref<1 | 0>(0);

   /**
    * 设置全局样式是否为默认值
    * @param {boolean} value
    * @returns {void}
    */
   function setGlobalStyle(value: boolean): void {
      localStorage.setItem("GS", `${value ? 1 : 0}`);
   }

   return {
      globalStyle,
      setGlobalStyle
   };
});
