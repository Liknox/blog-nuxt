import Vue from "vue";

import Message from "@/components/UI/Message.vue";
import AppButton from "@/components/UI/Controls/Button.vue";
import AppInput from "@/components/UI/Controls/Input.vue";
import AppTextArea from "@/components/UI/Controls/TextArea.vue";

Vue.component("AppButton", AppButton);
Vue.component("AppInput", AppInput);
Vue.component("AppTextArea", AppTextArea);
Vue.component("AppMessage", Message);
