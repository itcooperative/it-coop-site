<template>
  <section
    v-if="slice.primary.status ? true : false"
    id="contacts"
    class="py-20 sm:py-32 relative"
    :style="`background: ${slice.primary.Background}`"
  >
    <div class="container px-3 mx-auto">
      <H2 class="mb-6"><PrismicRichText :field="slice.primary.title" /></H2>
      <div class="sm:grid gap-8 sm:grid-cols-12 min-h-[600px]">
        <Form
          class="sm:col-span-12 md:col-span-6"
          name="contact-form"
          method="post"
          action="/contact/thankyou/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact-form" />

          <InputText
            type="text"
            class="mb-4"
            :placeholder="$prismic.asText(slice.primary.InputName)"
            name="name"
            required
          />
          <InputText
            type="text"
            class="mb-4"
            name="contact"
            required
            :placeholder="$prismic.asText(slice.primary.InputContacts)"
          />
          <InputTextArea
            name="about"
            class="mb-4"
            :placeholder="$prismic.asText(slice.primary.InputMessage)"
          />
          <InputCheckbox
            class="mb-4"
            :label="$prismic.asText(slice.primary.PersonalData)"
          />
          <div class="text-left mt-3">
            <BtnDefault type="submit" invert>
              <PrismicRichText :field="slice.primary.SubmitBtn" />
            </BtnDefault>
          </div>
        </Form>
        <div
          class="relative sm:col-span-12 md:col-span-6 flex items-center justify-end sm:justify-center mt-8 sm:mt-0"
        >
          <div
            v-click-outside="close"
            class="text-sm sm:text-xl p-8 z-[1000]"
            :class="[
              showAboutPrice
                ? ' sm:rounded-lg sm:max-w-[474px] fixed pb-12 sm:static top-[50px] sm:top-0 left-[10px] sm:left-0 right-[10px] sm:right-0 sm:bottom-0  '
                : ' relative cursor-pointer flex h-36 w-36 sm:h-48 sm:w-48 rounded-full p-3 sm:p-8  spin-animate text-center justify-center items-center ',
            ]"
            :style="`background-color: ${slice.primary['price-background']}`"
            @click="
              showAboutPrice === true
                ? (showAboutPrice = false)
                : (showAboutPrice = true)
            "
          >
            <div
              v-show="showAboutPrice"
              class="sm:hidden absolute right-3 top-3 cursor-pointer"
            >
              <img src="/close-icon.svg" class="h-8 ml-auto" alt="" />
            </div>
            <PrismicRichText
              style="transform: rotate(8deg)"
              :field="slice.primary['price-title']"
              v-show="!showAboutPrice"
            /><PrismicRichText
              v-show="showAboutPrice"
              :field="slice.primary['price-descr']"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "FormContact",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    return { showAboutPrice: false };
  },
  methods: {
    close() {
      this.showAboutPrice = false;
    },
  },
};
</script>

<style>
/* .spin-animate {
  animation: rotate 2s infinite;
  transform-origin: center;
}
@keyframes rotate {
  0%,
  100% {
    transform: rotate(15deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(-15deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
} */
</style>
