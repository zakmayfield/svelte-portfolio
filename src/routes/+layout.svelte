<script>
	import '@fontsource/bungee-shade';
	import '../app.css';
	import Footer from '../features/footer/Footer.svelte';
	import Nav from '../features/nav/Nav.svelte';
</script>

<Nav />
<div class="min-h-screen">
	<slot />
</div>
<Footer />
