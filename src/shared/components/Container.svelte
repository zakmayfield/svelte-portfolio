<script>
	import { merge } from '$lib/utils';
	export let classes = '';
</script>

<div class={`${merge('border mx-auto max-w-2xl ', classes)}`}>
	<slot />
</div>
