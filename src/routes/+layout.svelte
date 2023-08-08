<script>
	import '../app.css';
	import Footer from '../features/footer/Footer.svelte';
	import Nav from '../features/nav/Nav.svelte';
</script>

<Nav />
<div>
	<slot />
</div>
<Footer />
