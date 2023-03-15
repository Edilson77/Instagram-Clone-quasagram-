<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
    class="bg-white text-grey-10"
    bordered>
      <q-toolbar class="constrain">
        <q-btn
        class="large-screen-only q-mr-sm"
        to="/camera"
        flat
        round
        icon="eva-camera-outline"
        size="17px"
        dense/>
        <q-separator
        class="large-screen-only"
        vertical spaced />
        <q-toolbar-title
        class="text-grand-hotel text-bold" >
          Qasagram
        </q-toolbar-title>
        <q-btn
        class="large-screen-only"
        to="/"
        flat
        round
        icon="eva-home-outline"
        size="17px"
        dense/>
      </q-toolbar>
    </q-header>

    <q-footer
    class="bg-white small-screen-only"
    bordered>

          <q-tabs
          class="text-grey-10"
          active-color="primary"
          indicator-color="transparent"
      >
        <q-route-tab
        to="/"
        icon="eva-home-outline"
         />
        <q-route-tab
        to="/camera"
        icon="eva-camera-outline"
        />

      </q-tabs>

      </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
.q-toolbar

  height: 77px
.q-toolbar__title
      text-align: left
      @media (max-width: $breakpoint-xs-max)
      font-size: 25px
.q-footer
  .q-tab_icon
    font-size: 30px

    .constrain
  max-width: 975px
  margin: 0 auto



</style>

