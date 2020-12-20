<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
// eslint-disable-next-line import/extensions
import Navbar from './components/Navbar';
// eslint-disable-next-line import/extensions
import Footer from './components/Footer';

export default {
  components: {
    Navbar,
    Footer,
  },
  data: () => ({
    routes: [
      {
        name: 'sample',
        route: '/admin',
      },
    ],
  }),
};
</script>

<style>

</style>
