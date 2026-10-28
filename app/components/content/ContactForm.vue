<template>
  <form
    name="contact"
    method="POST"
    class="grid gap-4 max-w-xl mt-6"
    data-netlify="true"
    netlify
  >
    <input type="hidden" name="form-name" value="contact">
    <label class="grid gap-1">
      Name
      <input class="field" type="text" name="name" required autocomplete="name">
    </label>
    <label class="grid gap-1">
      Email
      <input class="field" type="email" name="email" required autocomplete="email">
    </label>
    <label class="grid gap-1">
      Phone
      <input class="field" type="tel" name="phone" autocomplete="tel">
    </label>
    <label class="grid gap-1">
      What do you need
      <select class="field" name="service" required>
        <option value="Website">
          Website
        </option>
        <option value="Custom software">
          Custom software
        </option>
      </select>
    </label>
    <label class="grid gap-1">
      Message
      <textarea class="field" name="message" rows="5" required />
    </label>
    <button class="bg-secondary text-onSecondary font-bold px-4 py-3 w-fit" type="submit">
      Send
    </button>
  </form>
</template>

<style scoped>
.field {
  font: inherit;
  color-scheme: dark;
  @apply bg-primary-900 text-onBackgroundDark border border-accent-800 px-3 py-2;
}
.field:focus {
  outline: 2px solid #01c6cb;
  outline-offset: 1px;
}
.field:-webkit-autofill {
  -webkit-text-fill-color: #e1e1e1;
  box-shadow: 0 0 0 1000px #061219 inset;
}
</style>
