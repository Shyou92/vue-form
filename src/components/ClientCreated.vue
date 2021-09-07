<template>
  <section class='clientSuccess' v-if="userCreated === true"
  :class="{clientSuccess_isOpened: userCreated === true}"
  >
    <div class="clientSuccess__container">
      <img src="../assets/images/Success.svg" class="clientSuccess__image"
      alt="Клиент успешно создан"
      @click="closeByClick"
      >
      <h2 class="clientSuccess__header">Клиент успешно создан!</h2>
    </div>
  </section>
</template>

<script>

export default {
  props: ['userCreated'],
  watch: {
    '$props': {
      handler() {
        return this.userCreated
      },
      deep: true,
    }
  },
  methods: {
    closeByClick() {
      let closePopup = this.userCreated;
      closePopup = false;      
      this.$emit('userCreated', closePopup)
    }
  }
}
</script>