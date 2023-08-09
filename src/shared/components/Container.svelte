<script>
	import { merge } from '$lib/utils';
	export let classes = '';
</script>

<div class={`${merge('mx-auto max-w-7xl px-6', classes)}`}>
	<slot />
</div>
