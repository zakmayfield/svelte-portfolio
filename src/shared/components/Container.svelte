<script>
	import { merge } from '$lib/utils';
	export let classes = '';
</script>

<div class={`${merge('border mx-auto max-w-7xl', classes)}`}>
	<slot />
</div>
