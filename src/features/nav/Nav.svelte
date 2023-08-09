<script>
	import Logo from '../../shared/components/Logo.svelte';
	import Socials from '../../shared/components/Socials.svelte';
	import NavLinks from '../../shared/components/NavLinks.svelte';
	import Container from '../../shared/components/Container.svelte';
</script>

<nav>
	<Container classes="flex justify-between items-center py-6">
		<Socials />
		<Logo />
		<NavLinks />
	</Container>
</nav>
