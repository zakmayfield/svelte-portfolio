<script>
	import { merge } from '$lib/utils';
	export let classes = '';
</script>

<ul class={`${merge('flex justify-between items-center', classes)}`}>
	<li><a href="/">Home</a></li>
	<li><a href="/experience">Experience</a></li>
</ul>
