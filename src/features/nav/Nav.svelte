<script>
	import Logo from '../../shared/components/Logo.svelte';
	import Socials from '../../shared/components/Socials.svelte';
	import NavLinks from '../../shared/components/NavLinks.svelte';
	import Container from '../../shared/components/Container.svelte';
</script>

<nav class="">
	<Container classes="max-w-xs  flex justify-between items-center">
		<Socials />
		<Logo />
		<NavLinks />
	</Container>
</nav>
