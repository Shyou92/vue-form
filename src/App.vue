<template>
  <div id="app">
    <Form @isUserCreated="createUser($event)"
    />
    <ClientCreated
    @userCreated="closePopup()"
    :userCreated="userCreated"/>
  </div>
</template>

<script>
import Form from '@/components/Form';
import ClientCreated from '@/components/ClientCreated';

  export default {
    data() {
      return {
        userCreated: false,
      }
    },
    components: {
      Form,
      ClientCreated,
    },
    methods: {
      createUser(userCreated) {
        this.userCreated = userCreated;
      },
      closePopup() {
        this.userCreated = false
      }
    }
  }
</script>

<style lang="scss">

</style>
