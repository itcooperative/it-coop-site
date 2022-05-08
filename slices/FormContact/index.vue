<template>
  <section
    v-if="slice.primary.status ? 'true' : 'false'"
    id="contacts"
    class="py-20"
    :style="`background: ${slice.primary.Background}`"
  >
    <div class="container px-3 mx-auto">
      <H2><PrismicRichText :field="slice.primary.title" /></H2>
      <Form name="contact" method="POST" data-netlify="true">
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
  mounted() {
    document.querySelector("form").addEventListener("submit", handleSubmit);

    const handleSubmit = (e) => {
      e.preventDefault();
      let myForm = document.getElementById("pizzaOrder");
      let formData = new FormData(myForm);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    };
  },
};
</script>

