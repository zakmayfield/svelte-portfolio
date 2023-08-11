<script>
	import { merge } from '$lib/utils';
	export let classes = '';
</script>

<ul class={`${merge('flex justify-between items-center gap-6', classes)}`}>
	<li><a href="/" class="hover:text-orange-500">Home</a></li>
	<li><a href="/experience" class="hover:text-orange-500">Experience</a></li>
</ul>
