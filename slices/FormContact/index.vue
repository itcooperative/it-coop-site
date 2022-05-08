<template>
  <section
    v-if="slice.primary.status ? 'true' : 'false'"
    id="contacts"
    class="py-20"
    :style="`background: ${slice.primary.Background}`"
  >
    <div class="container px-3 mx-auto">
      <H2><PrismicRichText :field="slice.primary.title" /></H2>

      <Form
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
          <BtnDefault type="submit">
            <PrismicRichText :field="slice.primary.SubmitBtn" />
          </BtnDefault>
        </div>
      </Form>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "FormContact",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

