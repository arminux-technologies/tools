<template>
  <v-app>
    <core-filter />

    <core-toolbar />

    <core-drawer />

    <core-view />
  </v-app>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  import CoreFilter from './core/Filter';
  import CoreToolbar from './core/Toolbar';
  import CoreDrawer from './core/Drawer';
  import CoreView from './core/View';
  export default {

    name: 'app',
    components: {
      CoreFilter,
      CoreToolbar,
      CoreDrawer,
      CoreView
    },

    mixins: [],

    data() {
      return {
        active: false
      }
    },

    props: [
      'account_id'
    ],

    computed: {
      account() {
        return this.$store.state.accounts[this.account_id];
      },

      assetCount() {
        return this.account.hasOwnProperty('asset') ? this.account.asset.length : 0;
      },
      bankName() {
        try {
          return this.account.branch.bank.name;
        }
        catch(exception) {
          return this.accountName;
        }
      },
      accountName(){
        return this.account.name? this.account.name:'Add Name';
      }
    },

    created() {
      //
    },

    mounted() {
      //
    },

    methods: {
      ...mapMutations([
        'SET_SHOW_MODAL',

      ]),
      editAccount: function() {
        this.SET_SHOW_MODAL({name: 'Account', state: true, id: this.account_id, editMode: true});
      }

    }
  };




</script>

<style>

</style>
