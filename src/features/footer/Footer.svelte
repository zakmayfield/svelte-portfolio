<script>
	import Logo from '../../shared/components/Logo.svelte';
	import Socials from '../../shared/components/Socials.svelte';
	import NavLinks from '../../shared/components/NavLinks.svelte';
	import Container from '../../shared/components/Container.svelte';
</script>

<footer>
	<Container classes="flex justify-between items-center">
		<Logo />
		<Socials />
		<NavLinks classes="flex-col items-end" />
	</Container>
</footer>
