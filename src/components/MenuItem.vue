<template>
  <li>{{elements.title}}</li>
</template>

<script>
export default {
  props: {
    elements: {
      type: Object,
      required: true
    }
  }
};
</script>