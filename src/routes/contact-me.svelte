<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import Heading2 from '../components/global/Heading2.svelte';
	import Body2 from '../components/global/Body2.svelte';
	import GithubDarkIcon from '../../static/icons/github-dark.svg';
	import LinkedinDarkIcon from '../../static/icons/linkedin-dark.svg';
</script>

<main class="px-3 lg:px-40">
	<section class="border-y-2 border-secondary-light-grey py-6 mb-6 grid grid-cols-1 md:grid-cols-2">
		<div>
			<Heading2>Get in Touch</Heading2>
		</div>
		<div class="flex flex-col gap-6">
			<Body2>
				I’d love to hear about what you’re working on and how I could help. I’m currently open to
				hearing about new employment opportunities or if you think I can help your company in a
				freelance capacity. My preference would be to work with a company in the Southern New
				Hampshore / Greater Boston area, but I’m also happy to hear about opportunites that don’t
				fit that description. I’m a hard-working and positive person who will always approach each
				task with a sense of purpose and attention to detail. Please do feel free to check out my
				online profiles below and get in touch using the form, or reach out on one of the social
				networks linked below.
			</Body2>
			<div class="flex gap-4 mt-14 sm:mt-0">
				<a href="https://github.com/jim9112" target="blank"
					><img src={GithubDarkIcon} alt="github icon" /></a
				>
				<a href="https://www.linkedin.com/in/james-hannan-811771144/" target="blank"
					><img src={LinkedinDarkIcon} alt="linkedin icon" /></a
				>
			</div>
		</div>
	</section>
	<section class="grid grid-cols-1 md:grid-cols-2 py-6">
		<div>
			<Heading2>Contact Me</Heading2>
		</div>
		<div>
			<form
				class="flex flex-col gap-6"
				id="contact"
				name="contact"
				method="POST"
				data-netlify="true"
				netlify-honeypot="bot-field"
			>
				<input type="hidden" name="form-name" value="contact" />
				<input type="text" name="bot-field" style="opacity: 0" />
				<div class="flex flex-col gap-2">
					<label for="name">Name</label>
					<input
						class="bg-secondary-light-grey h-12 pl-3"
						type="text"
						name="name"
						id="name"
						placeholder="Jane Doe"
						required
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label for="email">Email</label>
					<input
						class="bg-secondary-light-grey h-12 pl-3"
						type="email"
						name="email"
						id="email"
						placeholder="jane@sample.org"
						required
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label for="message">Message</label>
					<textarea
						class="bg-secondary-light-grey pl-3 pt-2"
						style="resize: none;"
						name="message"
						id="message"
						rows="5"
						required
						placeholder="A short description of what your looking for"
					/>
				</div>
				<input
					class="bg-primary-dark-blue w-fit text-secondary-light-grey py-4 px-9"
					type="submit"
					value="SEND MESSAGE"
				/>
			</form>
		</div>
	</section>
</main>
