<template>
  <section
    v-if="slice.primary.status ? true : false"
    id="contacts"
    class="py-20 sm:py-32"
    :style="`background: ${slice.primary.Background}`"
  >
    <div class="container px-3 mx-auto">
      <H2 class="mb-8"><PrismicRichText :field="slice.primary.title" /></H2>
      <div class="grid gap-8 grid-cols-12">
        <Form
          class="col-span-12 md:col-span-6"
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
            :label="$prismic.asText(slice.primary.InputMessage)"
          />
          <div class="text-left">
            <BtnDefault type="submit" invert>
              <PrismicRichText :field="slice.primary.SubmitBtn" />
            </BtnDefault>
          </div>
        </Form>
        <div class="col-span-12 md:col-span-6 flex items-center justify-center">
          <div
            class="text-lg p-8"
            :class="[
              showAboutPrice
                ? 'rounded-xl'
                : 'cursor-pointer flex h-48 w-48 rounded-full p-8   text-center justify-center items-center',
            ]"
            :style="`background-color: ${slice.primary['price-background']}`"
          >
            <PrismicRichText
              style="transform: rotate(8deg)"
              :field="slice.primary['price-title']"
              v-show="!showAboutPrice"
              @click="showAboutPrice = true"
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
};
</script>

