<template>
    <div id="app">
        <div class="jumbotron">
        <search-bar></search-bar>
        </div>
    </div>
</template>

<script>
    import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
    import SearchBar from './components/SearchBar.vue'

    export default {
        name: 'app',
        components: {
            SearchBar
        }
    }
</script>

<style></style>
