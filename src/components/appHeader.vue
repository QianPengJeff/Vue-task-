<template>
  <div id="app-header">
    <b-navbar type="dark" variant="primary" toggleable>
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
          <b-navbar-nav>
            <b-nav-item to="/" exact>Home</b-nav-item>
            <b-nav-item to="/about" exact>About Us</b-nav-item>
            <b-nav-item to="/contact" exact>Contact Us</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
